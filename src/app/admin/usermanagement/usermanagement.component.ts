import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from 'src/app/vo/user';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/common/common.service';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  //화면에 나올 테이블 컬럼명. (세로한줄)
  displayedColumns: string[] = ['Select', 'No', 'Name', 'ID', 'PWD', 'Trans', 'Email', 'Zipcode', 'Addr', 'Addr2', 'Phone'];
  dataSource: MatTableDataSource<User>;

  //uservo  호출.
  user: User = new User()

  //uservo 호출한후 유저리스트 생성. 즉, 화면에 대응하는 vo배열
  userList: User[] = [];

  // selection - angular material selection 에 필요한 기본 객체
  selection = new SelectionModel<User>(true, []);

  // recode 배열 - 서버로 변경사항 send 전까지 사용자 작업사항을 지속 기록함
  recodeDeptDelete: User[] = [];
  recodeDeptUpdate: User[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _as: AdminService, private _cs: CommonService) {
    this._cs.get('/userlist').subscribe(
      res => {
        if (res) {
          this.userList = <User[]>res;
          this.dataSource = new MatTableDataSource(this.userList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          alert('조회하신 값이 없습니다.')
        }
      },
      err => {
        console.log(err);
        alert('Error!!!')
      })
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.uiNum + 1}`;
  }
  ngOnInit() { }

  goPage(ID) {
    alert(ID);
  }

  getSelect() {
    // 셀렉트 값을 반환함 반환 할 요소
    // 1. selected rows VO 배열
    // 2. unselected rows VO 배열
    var tmpArray = <User[]>this.dataSource._orderData(this.userList);
    var cntArray = 0;
    var recodeSelectedArrayNum = [];
    var recodeUnselecedArrayNum = [];
    var arrayDatas = {};
    for (let tmp of tmpArray) {
      if (this.selection.isSelected(tmp)) {
        recodeSelectedArrayNum.push(cntArray);
      } else {
        recodeUnselecedArrayNum.push(cntArray);
      }
      cntArray++;
    }
    tmpArray = <User[]>tmpArray;
    // 화면에 그려질 dept[] 생성
    var selectedList = <User[]>[];
    for (let arrayNum of recodeSelectedArrayNum) {
      selectedList.push(tmpArray[arrayNum]);
    }
    var unselectedList = <User[]>[];
    for (let arrayNum of recodeUnselecedArrayNum) {
      unselectedList.push(tmpArray[arrayNum]);
    }
    selectedList = <User[]>selectedList;
    unselectedList = <User[]>unselectedList;
    arrayDatas = {
      "selectedList": selectedList,
      "unselectedList": unselectedList
    }
    console.log(arrayDatas);
    return arrayDatas;
  }

  doDelete() {
    this._cs.delete('/deluser').subscribe(res => {
      if (res) {
        // 1. selected/unselected 배열을 받아옴
        var getSelect = this.getSelect();
        this.userList = getSelect['selectedList'];
        this.userList = <User[]>this.userList;
        // 2. (선택된것)삭제될 data 인 recodeDeptDelete 에 담기
        for (let selected of this.userList) {
          this.recodeDeptDelete.push(selected);
        }
        console.log(this.recodeDeptDelete);
        // 3. (미선택된것)화면에 다시 뿌리기
        this.userList = getSelect['unselectedList'];
        this.userList = <User[]>this.userList;
        this.dataSource = new MatTableDataSource(this.userList);
        this.selection = new SelectionModel<User>(true, []);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }else{
        alert('삭제실패!!')
      }

    },
      err => {
        console.log('삭제실패!');
      })
  }





}

  // loadUserList() {
  //   this._cs.get('/userlist').subscribe(res => {
  //     this.userList = <User[]>res;
  //   },
  //     err => {
  //       console.log(err);
  //     })
  // };

  // deleteUser() {
  //   this._cs.delete('/deluser').subscribe(res => {
  //     console.log(res);
  //   },
  //     err => {
  //       console.log('삭제실패!');
  //     })
  // }


// }
