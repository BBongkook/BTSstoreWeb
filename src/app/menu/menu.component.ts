import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginout:string = 'LOGIN';
  isLoginout:boolean = true;
  private isButtonVisible = true;

  constructor(private _router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('id')){
      this.loginout = 'LOGOUT';
      this.isLoginout = false;
    }
  }
  goPage(url: string) {
    this._router.navigate([url]);
  }
  doLogout(){
    alert('로그아웃 되었습니다.');
    localStorage.clear();
    location.href = '';
  }
}
