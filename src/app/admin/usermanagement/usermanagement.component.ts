import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from 'src/app/vo/user';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/common/common.service';
import { MatPaginator, MatSort } from '@angular/material';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  p: number = 1;
  //uservo  호출.
  user: User = new User()

  //uservo 호출한후 유저리스트 생성. 즉, 화면에 대응하는 vo배열
  userList: User[] = [];

  constructor(private _as: AdminService, private _cs: CommonService) {
    this._cs.get('/userlist').subscribe(
      res => {
        if (res) {
          this.userList = <User[]>res;
        } else {
          alert('조회하신 값이 없습니다.')
        }
      },
      err => {
        console.log(err);
        alert('사용자 권한이 없습니다.')
        
      })
  }
 

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  
  /** The label for the checkbox on the passed row */
  
  ngOnInit() { }


  delete(row?: User) {
    this._cs.delete('/deluser').subscribe(res => {
      console.log(row.uiNum)
    },


      err => {
        alert('삭제실패!');
        console.log('삭제실패!');
      })

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
}