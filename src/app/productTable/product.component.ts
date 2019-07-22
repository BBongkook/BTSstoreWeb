import { Component, OnInit } from '@angular/core';
import { Product } from '../vo/product';
import { ProductService } from './product.service';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //imgurl:string = 'http://localhost:88/img/'
  p: number = 1;
  pLargeName:string='';
  pName:string='';
  productDivideName:string;
  product: Product[]

  constructor(private _cs:CommonService) { }
  
  ngOnInit() {
    if(sessionStorage.getItem('searchprod')!=null){
      this.pName=sessionStorage.getItem('searchprod');
      this.pLargeName = this.pName+" 검색 결과";
      this._cs.getProD('/productSearch/'+this.pName).subscribe(res=>{
        this.product = <Product[]>res;
        for(var i=0; i<this.product.length; i++){
          var pPriceToString = ""+this.product[i].pprice;
          var pPriceComma = pPriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          this.product[i].pprice = <any>pPriceComma;

      }
        console.log(this.product);
        sessionStorage.removeItem('searchprod');
      })
    }else{
    this.productDivideName = sessionStorage.getItem('prod');
    console.log(this.productDivideName);
    this.pLargeName=this.productDivideName;
    this._cs.getProD('/productDivide/'+this.pLargeName).subscribe(res=>{
        this.product = <Product[]>res;
        for(var i=0; i<this.product.length; i++){
          var pPriceToString = ""+this.product[i].pprice;
          var pPriceComma = pPriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          this.product[i].pprice = <any>pPriceComma;

      }
        console.log(this.product);
        sessionStorage.removeItem('prod');
    })
  }
  }
  goViewPage(pNum){
    sessionStorage.setItem('pNum',pNum);
    location.href='productview';
  }
}