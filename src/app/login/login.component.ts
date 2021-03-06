import { Component, OnInit } from '@angular/core';
import { User } from '../vo/user';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

declare var $: any;


if (sessionStorage.getItem('id') || sessionStorage.getItem('id') != 'admin') {
  window.setTimeout(function () {
    sessionStorage.clear();
    alert('로그인 후 30분이 지났습니다. 자동 로그아웃 됩니다.');
    location.href = '';
  }, 1800000);
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
  isResult: boolean = false;
  noResult: boolean = false;
  constructor(private _cs: CommonService, private _router: Router) {
    // 로그인 확인로직
    if (this._cs.isLogin()) {
      alert('이미 로그인 되어 있습니다.');
      location.href = '';
    }
  }

  ngOnInit() {
    // 로그인되어있을시 메인화면으로 돌아가게함
    if (this._cs.isLogin()) {
      this._router.navigate(['/']);
    }
  }

// 로그인 로직
  doLogin(): void {
   
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

// 아이디찾기 화면모델
  showModal(): void {
    this.us.uiName = null;
    this.us.uiEmail = null;
    $("#findId").modal('show');
  }

// 비밀번호찾기 화면모델
  showModal2(): void {
    this.us.uiId = null;
    this.us.uiEmail = null;
    $("#findPwd").modal('show');
  }

// 아이디찾기 로직
  findId() {
    console.log(this.us);
    this._cs.post('/userId', this.us).subscribe(res => {
      if (res) {
        this.isResult = true;
        this.noResult = false;
        this.us.uiId = res['uiId'];
      } else {
        this.isResult = false;
        this.noResult = true;
      }
    })
  }

// 비밀번호찾기 로직
  findPwd() {
    console.log(this.us);
    this._cs.post('/findPwd', this.us).subscribe(res => {
      if (res) {
        this._cs.postEmail('/mailSender', this.us).subscribe(res => {
          if (res)
            this.isResult = true;
          this.noResult = false;
        })
      } else {
        this.isResult = false;
        this.noResult = true;
      }
    })
  }

// 모델 숨기기
  hideModal(): void {
    document.getElementById('close-modal').click();
    document.getElementById('close-modal2').click();
    this.isResult = null;
    this.isResult = false;
    this.noResult = null;
    this.noResult = false;

  }

}