import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Product } from '../vo/product';
import { AppComponent } from '../app.component';
import { Cart } from '../vo/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  pNum: string;
  product: Product[];
  curVal:number = 1;
  curprice:number;
  savePrice:number;
  c: Cart = new Cart();
  constructor(private _cs: CommonService, private _router: Router) {
    this.pNum = sessionStorage.getItem('pNum');
    
  }

  ngOnInit() {
    this._cs.get('/productViewPage/' + this.pNum).subscribe(res => {
      this.product = <Product[]>res;
      this.savePrice = this.product[0]['pprice'];
      for (var i = 0; i < this.product.length; i++) {
        var pPriceToString = "" + this.product[i].pprice;
        var pPriceComma = pPriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.product[i].pprice = <any>pPriceComma;
      }
      this.curprice = this.product[0]['pprice'];
      console.log(this.savePrice);
      console.log(this.product);
    })
  }

  
  minus() {
    this.curVal = this.curVal - 1;
    if (this.curVal < 1) {
      alert('갯수가 1 보다 작을수없습니다.')
      this.curVal =1 ;
    }
    this.product[0]['pprice'] = this.savePrice * this.curVal;
    var pPriceToString = "" + this.product[0].pprice;
        var pPriceComma = pPriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.product[0].pprice = <any>pPriceComma;
  }

  plus() {
    this.curVal = this.curVal + 1;
    this.product[0]['pprice'] = this.savePrice * this.curVal;
    console.log(this.savePrice);
    var pPriceToString = "" + this.product[0].pprice;
        var pPriceComma = pPriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.product[0].pprice = <any>pPriceComma;
  }

  addCart(): void {
    this.c.uiId = sessionStorage.getItem('id');
    this.c.pNum = <any>this.pNum;
    this.c.cAmount = this.curVal;
    this._cs.postFile('/insertCart', this.c).subscribe(res => {
      if (res) {
        alert('선택하신 상품이 장바구니에 추가되었습니다');
        this.save_confirm();
        this.c.cAmount = null;
      }
    })
  }
  save_confirm(){
    if (confirm('장바구니에 상품이 담겼습니다. 장바구니로 이동하시겠습니까')){
      location.href='cartinfo';
    }
    else{
    }
  }

  goPage(url: string) {
    this._router.navigate([url]);
  }



}

