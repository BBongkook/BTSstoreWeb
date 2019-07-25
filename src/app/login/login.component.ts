import { Component, OnInit } from '@angular/core';
import { User } from '../vo/user';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

if(sessionStorage.getItem('id') && sessionStorage.getItem('id')!='admin'){
  window.setTimeout(function () {
    sessionStorage.clear();
    alert('로그인 후 30분이 지났습니다. 자동 로그아웃 됩니다.');
    location.href = '';
  },1800000);
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  us: User = new User();
  isLoginout: boolean = true;
  token: any = "";
  
  constructor(private _cs: CommonService, private _router: Router) {
    if(this._cs.isLogin()){
      alert('이미 로그인 되어 있습니다.');
      location.href='';
    }
  }



  ngOnInit() {
    if (this._cs.isLogin()) {
      this._router.navigate(['/']);
    }
  }
  
  doLogin(form): void {
    if (!this.us.uiId) {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (!this.us.uiPwd) {
      alert('비밀번호 입력해주세요.');
      return;
    }
    this._cs.post('/login', this.us).subscribe(res => {
      if (res) {
        this.us = <User>res;
        alert('로그인이 성공하였습니다.');
        sessionStorage.setItem('id', this.us.uiId);
        sessionStorage.setItem('auth', this.us.uiAuth);
        sessionStorage.setItem('token', this.us.uiToken);
        location.href = '';   
      } else {
        alert('아이디나 비밀번호를 확인하세요.');
      }
    });
  }
  goPage(url: string) {
    this._router.navigate([url]);
  }
}