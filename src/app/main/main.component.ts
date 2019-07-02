import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Product } from '../vo/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  url = '';
  //productvo  호출.
  product: Product = new Product()

  //productvo 호출한후 제품리스트 생성. 즉, 화면에 대응하는 vo배열
  productList: Product[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goPage() {
    return this.router.navigateByUrl('/' + this.url);
  }

}


