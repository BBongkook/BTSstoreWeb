import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/vo/cart';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {
  cart:Cart[];
  totalPrice:number = 0;
  constructor(private _cs:CommonService) { }

  ngOnInit() {
    this.getCartList();
  }

  getCartList(){
    this._cs.get('/cartList/'+sessionStorage.getItem('id')).subscribe(res=>{
      if(res){
        this.cart = <Cart[]>res;
        console.log(this.cart);
        for(var idx of this.cart){
         
          console.log(idx.cprice)
          this.totalPrice = this.totalPrice + idx.cprice;
         
        }

        
      }
      
    })
  }

}
