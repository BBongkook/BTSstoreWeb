import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/vo/cart';
import { CommonService } from 'src/app/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart:Cart[];
  uCart:Cart = new Cart();
  totalPrice:number = 0;
  nu:number[] = [];
  jMap:any = {};
  constructor(private _cs:CommonService,private _router:Router) {
    this._cs.get('/cartList/'+sessionStorage.getItem('id')).subscribe(res=>{
      this.totalPrice=0;
      if(res){
        this.cart = <Cart[]>res;
        console.log(this.cart);
        for(var idx of this.cart){
          console.log(idx.cprice)
          this.totalPrice = this.totalPrice + idx.cprice;
        }
        this.totalPrice = <any>this.convertPrice(this.totalPrice);
        for (var i = 0; i < this.cart.length; i++) {
          this.cart[i].cprice = <any>this.convertPrice(this.cart[i].cprice);
          this.cart[i].pprice = <any>this.convertPrice(this.cart[i].pprice);
        }
      }
    })
   }
  ngOnInit() {}

  convertPrice(price:any){
    var prePriceToString = "" + price;
    var prePriceComma = prePriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return prePriceComma;
  }
}
