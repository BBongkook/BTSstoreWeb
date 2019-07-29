import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
page:string;

  constructor(private router: Router) {
    if(sessionStorage.getItem('orderlist')!=null){
      this.page = 'order-list';
      sessionStorage.removeItem('orderlist');
    }else{
      this.page = 'myinfomanagement';
    }
   }
  showFiller = false;
  ngOnInit() {

  }

  changePage(page){
    this.page = page;
  }

}
