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
  product: Product = new Product();

  constructor(private _cs:CommonService) { }
  
  ngOnInit() {
    if(localStorage.getItem('searchprod')!=null){
      this.pName=localStorage.getItem('searchprod');
      this._cs.getProD('/productSearch/'+this.pName).subscribe(res=>{
        this.product = <Product>res;
        console.log(this.product);
        localStorage.removeItem('searchprod');
      })
    }else{
    this.productDivideName = localStorage.getItem('prod');
    console.log(this.productDivideName);
    this.pLargeName=this.productDivideName;
    this._cs.getProD('/productDivide/'+this.pLargeName).subscribe(res=>{
        this.product = <Product>res;
        console.log(this.product);
        localStorage.removeItem('prod');
    })
  }
  }
}