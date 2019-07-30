import { Component, OnInit } from '@angular/core';
import { User } from '../vo/user';
import { CommonService } from '../common/common.service';
import { Cart } from '../vo/cart';

declare const jQuery:any;
declare const IMP:any;

var userName;
var userEmail;
var usertel;
var useraddr;
var useraddr2;
var userpostcode;



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userlist:User[] = [];
  user:User = new User();
  cartlist:Cart[];
  cart:Cart = new Cart();
  convertPrice:string;
  totalPrice:number=0;
  productArray:string[] = [];
  productName:string;
  

  constructor(private _cs:CommonService) { 
    this._cs.get('/userId/'+sessionStorage.getItem('id')).subscribe(
      res=>{
        console.log(res);
        this.userlist=<User[]>res
        userName = this.userlist['uiName'];
        userEmail = this.userlist['uiEmail'];
        useraddr = this.userlist['uiAddr'];
        useraddr2 = this.userlist['uiAddr2'];
        userpostcode = this.userlist['uiZipcode'];
      }
    )
    this._cs.get('/cartList/'+sessionStorage.getItem('id')).subscribe(
      res=>{
        this.cartlist = <Cart[]>res;
        for(var idx of this.cartlist){
          this.totalPrice = this.totalPrice + idx.cprice;
          this.productArray[this.productArray.length]=idx.pname;
        }
        if(this.productArray.length>1){
          this.productName = this.productArray[0]+"외"+(this.productArray.length-1)+"개"
        }
        var prePriceToString = "" + this.totalPrice;
        this.convertPrice = prePriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log(this.convertPrice);
        console.log(this.productName);
      }
    )
    
  }

  ngOnInit() {
    
   
  }

  payment(){
    IMP.init('imp09009305');
    IMP.request_pay({
      pg : 'inicis', // version 1.1.0부터 지원.
      pay_method : 'card',
      merchant_uid : 'merchant_' + new Date().getTime(),
      name : this.productName,
      amount : this.totalPrice,
      buyer_email : userEmail,
      buyer_name : userName,
      buyer_tel : usertel,
      buyer_addr : useraddr + useraddr2,
      buyer_postcode : userpostcode,
      m_redirect_url : 'https://www.yourdomain.com/payments/complete'
  }, function(rsp) {
      if ( rsp.success ) {
          var msg = '결제가 완료되었습니다.';
          msg += '고유ID : ' + rsp.imp_uid;
          msg += '상점 거래ID : ' + rsp.merchant_uid;
          msg += '결제 금액 : ' + rsp.paid_amount;
          msg += '카드 승인번호 : ' + rsp.apply_num;
          
      } else {
          var msg = '결제에 실패하였습니다.';
          msg += '에러내용 : ' + rsp.error_msg;
          location.href='orderinfo';
      }
      alert(msg);
  });
  }

  delivery_change(){
    window.open('delivery_change','window_name','width=430,height=500,location=no,status=no,scrollbars=yes');
  }
  
}