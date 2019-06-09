import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { LoginService } from './login.service';
import { User } from '../vo/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  us: User = new User();
  constructor(private _ls: LoginService, private _router: Router) {


  }
  ngOnInit() {
  }
  doLogin(): void {

    if (!this.us.uiId) {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (!this.us.uiPwd) {
      alert('비밀번호 입력해주세요.');
      return;
    }
    this._ls.doLogin(this.us).subscribe(res => {
      if(res.response){
        this.us=res.response;
        alert('로그인이 성공하였습니다.');
        location.href = '';
      }else{
        alert('아이디나 비밀번호를 확인하세요.');
      }
    });
  }
  goPage(url: string) {
    this._router.navigate([url]);
  }
}
