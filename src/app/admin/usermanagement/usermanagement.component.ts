import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from 'src/app/vo/user';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/common/common.service';


@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  user: User = new User()
  userList: User[] = [];



  constructor(private _as: AdminService, private _cs:CommonService) { }

  ngOnInit() {
    this._cs.get('/userlist').subscribe(res => {
      this.userList = <User[]>res;
    },
      err => {
        console.log(err);
      })
  };


  // loadUserList() {
  //   this._cs.get('/userlist').subscribe(res => {
  //     this.userList = <User[]>res;
  //   },
  //     err => {
  //       console.log(err);
  //     })
  // };

  deleteUser() {
    this._cs.delete('/deluser').subscribe(res=>{
      console.log(res);
    },
    err=>{
      console.log('삭제실패!');
    })
  }


}
