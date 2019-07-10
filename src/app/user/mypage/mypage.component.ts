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
  page = 'usermanagement';
  ngOnInit() {
    // $("#menu-toggle").click(function (e) {
    //   e.preventDefault();
    //   $("#wrapper").toggleClass("toggled");
    // });
  }

  changePage(page){
    this.page = page;
  }
  // changeValue(evt) {
  //   $(document).ready(function () {
  //     $("#naver").load("/usermanagement");
  //   });

  // }
}
