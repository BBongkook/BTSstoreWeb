import { Component, OnInit } from '@angular/core';
import { Product } from '../vo/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = new Product();
  productList:Product[]=[];

  constructor(private _ps:ProductService) { }
  
  ngOnInit() {
    this._ps.loadProduct().subscribe(res=>{
      console.log(res.response);
      this.productList=res.response;
    })
  }
}
