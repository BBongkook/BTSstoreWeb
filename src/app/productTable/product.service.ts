import { Injectable } from '@angular/core';
import { Product } from '../vo/product';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'http://localhost:88/'
  
  constructor() { }

  loadProduct() {
    return ajax.get(this.baseUrl + 'productLists')
  };
}
