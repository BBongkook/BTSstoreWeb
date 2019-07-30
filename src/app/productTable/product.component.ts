import { Component, OnInit } from '@angular/core';
import { Product } from '../vo/product';
import { CommonService } from '../common/common.service';
import { Cart } from '../vo/cart';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //imgurl:string = 'http://localhost:88/img/'
  p: number = 1;
  productCategoryName:string;
  pLargeName:string='';
  pName:string='';
  productDivideName:string;
  product: Product[];
  c: Cart = new Cart();
  curVal : number = 1;
  pNum: string;
  constructor(private _cs:CommonService) {
    this.pNum = sessionStorage.getItem('pNum');
   }
  
  ngOnInit() {
    if(sessionStorage.getItem('searchprod')!=null){
      this.pName=sessionStorage.getItem('searchprod');
      this.pLargeName = this.pName+" 검색 결과";
      this._cs.get('/productSearch/'+this.pName).subscribe(res=>{
        this.product = <Product[]>res;
        for(var i=0; i<this.product.length; i++){
          var pPriceToString = ""+this.product[i].pprice;
          var pPriceComma = pPriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          this.product[i].pprice = <any>pPriceComma;

      }
        console.log(this.product);
        sessionStorage.removeItem('searchprod');
      })
    }else if(sessionStorage.getItem('prod')){
        this.productDivide();
        this.productCategoryName = sessionStorage.getItem('prod');
        sessionStorage.removeItem('prod');
    }
    else{
      this.productFilter;
  }
  }
  // 상품
  goViewPage(pNum){
    sessionStorage.setItem('pNum',pNum);
    location.href='productview';
  }

  productDivide(){
    this.productDivideName = sessionStorage.getItem('prod');
    console.log(this.productDivideName);
    this.pLargeName=this.productDivideName;
    this._cs.get('/productDivide/'+this.pLargeName).subscribe(res=>{
        this.product = <Product[]>res;
        for(var i=0; i<this.product.length; i++){
          var pPriceToString = ""+this.product[i].pprice;
          var pPriceComma = pPriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          this.product[i].pprice = <any>pPriceComma;

      }
        console.log(this.product);

    })
  };



  productFilter(divide:string){
    this.pLargeName=this.productDivideName;
    this._cs.get('/productDivide/'+this.pLargeName+'&'+divide).subscribe(res=>{
      console.log(res);
      this.product = <Product[]>res;
      for(var i=0; i<this.product.length; i++){
        var pPriceToString = ""+this.product[i].pprice;
        var pPriceComma = pPriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.product[i].pprice = <any>pPriceComma;
      }
    })
  }
 
  addCart(pNum): void {
    console.log(pNum)
    sessionStorage.setItem('pNum',pNum);
    this.c.uiId = sessionStorage.getItem('id');
    this.c.pNum = <any>sessionStorage.getItem('pNum');
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



}
