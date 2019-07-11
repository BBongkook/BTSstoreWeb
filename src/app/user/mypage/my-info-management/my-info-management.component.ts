import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/vo/user';
import { CommonService } from 'src/app/common/common.service';
import { CssKeyframesDriver } from '@angular/animations/browser/src/render/css_keyframes/css_keyframes_driver';


@Component({
  selector: 'app-my-info-management',
  templateUrl: './my-info-management.component.html',
  styleUrls: ['./my-info-management.component.css']
})
export class MyInfoManagementComponent implements OnInit {
  user:User = new User();
  transValue:boolean = true;
  constructor(private cs:CommonService) { }

  ngOnInit() {
    console.log(localStorage.getItem('id'));
    this.getMyInfo();
  }
  modifyMyinfo(){
    // this.cs.post('/updateUser')
    
    console.log(this.user.uiName);
  }
  getMyInfo(){
    this.cs.get('/userId/'+localStorage.getItem('id')).subscribe(res=>{
      console.log(res);
      this.user = <User>res;
      
    }
      )
  }
}
