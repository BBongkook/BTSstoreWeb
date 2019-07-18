import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Product } from '../vo/product';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  pNum:string;
  product:Product[];
  constructor(private _cs:CommonService) {
    this.pNum=sessionStorage.getItem('pNum');
    this._cs.get('/productViewPage/'+this.pNum).subscribe(res=>{
        this.product = <Product[]>res;
        console.log(this.product);
    })
   }

  ngOnInit() {
  }

}
