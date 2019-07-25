import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../vo/user';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginout: string = 'LOGIN';
  isLoginout: boolean = true;
  isButtonVisible: boolean = false;
  isButtonMyPage: boolean = false;
  user = new User;
  searchProduct:string='';
  userId = sessionStorage.getItem('id');

  constructor(private _router: Router, private _cs:CommonService) { }

  ngOnInit() {
    if (this._cs.isLogin()) {
      this.loginout = 'LOGOUT';
      this.isLoginout = false;
    }
    if (sessionStorage.getItem('auth') === "0") {
      this.isButtonVisible = true;
    }
    if (sessionStorage.getItem('auth') === "1") {
      this.isButtonMyPage = true;
    } 

  }
  goPage(url: string) {
    this._router.navigate([url]);
  }
  doLogout() {
    alert('로그아웃 되었습니다.');
    sessionStorage.clear();
    location.href = '';
  }
  searchAllProduct(searchProduct){
    sessionStorage.setItem('searchprod',searchProduct);
    location.href='product';
  }

}