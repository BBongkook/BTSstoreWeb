import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/vo/cart';
import { CommonService } from 'src/app/common/common.service';
import { unescapeIdentifier } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {
  cart:Cart[];
  uCart:Cart = new Cart();
  totalPrice:number = 0;
  nu:number[] = [];
  jMap:any = {};
  constructor(private _cs:CommonService,private _router:Router) { }

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
  checkInfo(checkd:number): number[]{
    var cNum = this.nu.lastIndexOf(checkd);
    if(cNum>=0){
      this.nu[cNum]=null;
      return;
    }
    this.nu.push(checkd);
  }
  doDelete(){
    var cMap = new Map();
    var delNum:number[] = this.nu;
    var cArray = new Array();
 for(var i=0; i<delNum.length; i++){
      cMap.set("number"+i,delNum[i])
      if(cMap.get("number"+i)==null){
        cMap.delete("number"+i);
     }
     this.jMap={"value":cMap.get("number"+i)}
     cArray.push(this.jMap);
   }
    
    var jsonDelNum = JSON.stringify(cArray);
    console.log(jsonDelNum);
    this._cs.delete('/deleteCart', cArray).subscribe(res=>{
      if(res){
        alert('삭제성공');
        this.getCartList();
      }
    })
  }

  goPage(url: string) {
    this._router.navigate([url]);
  }


}
