import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  constructor(private router: Router) { }
  showFiller = false;
  page = 'myinfomanagement';
  ngOnInit() {

  }

  changePage(page){
    this.page = page;
  }

}
