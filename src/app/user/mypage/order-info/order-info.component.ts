import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderList(){
    sessionStorage.setItem('orderlist','order-list');
    location.href='mypage';
  }
  contShop(){
    location.href='';
  }
}
