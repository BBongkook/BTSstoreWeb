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
  userNumArray: number[] = [];
  //uservo 호출한후 유저리스트 생성. 즉, 화면에 대응하는 vo배열
  userList: User[] = [];

  constructor(private _as: AdminService, private _cs: CommonService) {
  }

  ngOnInit() {
    this.getUserList();
   }
// 유저조회
  getUserList(){
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
        location.href = ''
      })
  }
// 유저삭제
  delUser(uNum: number) {
    var tmpUnum = this.userNumArray.lastIndexOf(uNum);
    if (tmpUnum>=0) {
      this.userNumArray[tmpUnum] =0;
      this.sort(this.userNumArray);
      this.userNumArray.pop();
      return;
    }
    this.userNumArray.push(uNum);
    this.sort(this.userNumArray);
  }
  
  userDelete(){
    var setUserNumJson = JSON.stringify(this.userNumArray);
    console.log(setUserNumJson);
    this._cs.delete('/deluser', setUserNumJson).subscribe(res=>{
      if(res){
        console.log('삭제 성공');
        this.getUserList();
      }
    },err=>{
      alert('삭제 실패');
    })
  }
  
  sort(uArray:number[]){
    for(var i=0; i<uArray.length; i++){
      for(var j=0; j<uArray.length; j++){
        if(uArray[i]>uArray[j]){
          var tmpNum = uArray[i];
          uArray[i]=uArray[j];
          uArray[j]=tmpNum;
        }
      }
    }
  }

}
