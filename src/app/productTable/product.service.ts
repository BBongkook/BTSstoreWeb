import { Injectable } from '@angular/core';
import { Product } from '../vo/product';
import { ajax } from 'rxjs/ajax';
import { ProductComponent } from './product.component';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'https://a.btsstore.shop/'
  
  constructor(private _pt:ProductComponent, private _cs:CommonService) { }

  loadProduct() {
    return ajax.get(this.baseUrl + 'productLists')
  };
}
