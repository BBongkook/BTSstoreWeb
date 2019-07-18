import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/vo/user';
import { CommonService } from 'src/app/common/common.service';
import { NgLocaleLocalization } from '@angular/common';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {
  us:User = new User();
  wd:string = '';
  constructor(private _cs:CommonService) { 
    this._cs.get("/userId/"+sessionStorage.getItem('id')).subscribe(res=>{
      if(res){
        this.us.uiId = res['uiId'];
        this.us.uiNum = res['uiNum'];
      }
    })
  }

  ngOnInit() {
  }
    

  doWithdrawal(){
    this.us.uiPwd=this.wd;
    this._cs.post('/login',this.us).subscribe(res=>{
      if(res){
        this._cs.delete('/deluser/'+this.us.uiNum).subscribe(res=>{
          if(res){
            alert('회원 탈퇴 성공')
            sessionStorage.clear();
            location.href='';
          }else{
            alert('회원 탈퇴 실패');
          }
        })
      }
      else{
        alert('회원 탈퇴 실패');
      }
    })
  }
}
