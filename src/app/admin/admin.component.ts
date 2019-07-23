import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
}
