import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from 'src/app/vo/user';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
user:User = new User()
userList:User[]=[];
  constructor(private _as:AdminService) { }

  ngOnInit() {
    this._as.loadUserList().subscribe(res=>{
      console.log(res.response);
      this.userList=res.response;
    })
  }

}
