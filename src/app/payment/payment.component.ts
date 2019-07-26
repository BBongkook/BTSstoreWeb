import { Component, OnInit } from '@angular/core';
import { User } from '../vo/user';
import { CommonService } from '../common/common.service';
import { Cart } from '../vo/cart';

declare const jQuery:any;
declare const IMP:any;

var userName;
var productName;


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userlist:User[] = [];
  cartlist:Cart[];
  user:User = new User();
  totalPrice:number=0;
  convertPrice:string;
  cart:Cart = new Cart();
  productArray:string[] = [];
  productName:string;

  constructor(private _cs:CommonService) { 
    this._cs.get('/userId/'+sessionStorage.getItem('id')).subscribe(
      res=>{
        console.log(res);
        this.userlist=<User[]>res
        userName = this.user.uiName;
      }
    )
    this._cs.get('/cartList/'+sessionStorage.getItem('id')).subscribe(
      res=>{
        this.cartlist = <Cart[]>res;
        console.log(this.cartlist);
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
      buyer_email : 'iamport@siot.do',
      buyer_name : userName,
      buyer_tel : '010-1234-5678',
      buyer_addr : '서울특별시 강남구 삼성동',
      buyer_postcode : '123-456',
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
      }
      alert(msg);
  });
  }

  delivery_change(){
    window.open('delivery_change','window_name','width=430,height=500,location=no,status=no,scrollbars=yes');
  }
  
}