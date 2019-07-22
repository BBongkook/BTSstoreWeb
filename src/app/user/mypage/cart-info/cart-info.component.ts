import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/vo/cart';
import { CommonService } from 'src/app/common/common.service';
import { unescapeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {
  cart:Cart[];
  uCart:Cart = new Cart();
  totalPrice:number = 0;
  constructor(private _cs:CommonService) { }

  ngOnInit() {
    this.getCartList();
    
  }

  getCartList(){
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
  convertPrice(price:any){
    var prePriceToString = "" + price;
    var prePriceComma = prePriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return prePriceComma;
  }

  amountChange(cId:number, cAmount:number, pNum:number){
    this.uCart.cId=cId;
    this.uCart.cAmount=cAmount;
    this.uCart.pNum=pNum;
    console.log(this.uCart);
    this._cs.postFile('/updatePrice', this.uCart).subscribe(res=>{
      if(res==1){
        this.getCartList();
      }
    })
    
  }

}
