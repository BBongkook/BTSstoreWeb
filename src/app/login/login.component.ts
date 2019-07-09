import { Component, OnInit } from '@angular/core';
import { User } from '../vo/user';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  us: User = new User();
  isLoginout: boolean = true;
  token:any ="";
  constructor(private _cs: CommonService, private _router: Router) {


  }
  ngOnInit() {
    if(localStorage.getItem('id')){
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
    this._cs.post(this.us).subscribe(res => {
      if (res) {
        this.us = <User>res;
        alert('로그인이 성공하였습니다.');
        localStorage.setItem('id', this.us.uiId);
        localStorage.setItem('auth', this.us.uiAuth);
        localStorage.setItem('token', this.us.uiToken);
        console.log(localStorage.getItem('token'));
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
