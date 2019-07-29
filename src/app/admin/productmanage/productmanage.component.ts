import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/vo/product';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { AuthInterceptorService } from 'src/app/auth/auth-interceptor.service';


@Component({
  selector: 'app-productmanage',
  templateUrl: './productmanage.component.html',
  styleUrls: ['./productmanage.component.css']
})
export class ProductmanageComponent implements OnInit {
  p: number = 1;
  //productvo  호출.
  product: Product = new Product();
  //productvo 호출한후 제품리스트 생성. 즉, 화면에 대응하는 vo배열
  productList: Product[] = [];
  constructor(private router: Router, private _cs: CommonService, private _auservice: AuthInterceptorService) {
   this.getProductList();
  }

  ngOnInit() {
  }

  deleteProduct(pNum:number){
    console.log(pNum);
    this._cs.delete('/deleteProduct',pNum).subscribe(res=>{
      alert('상품이 삭제되었습니다');
      this.getProductList();
    })
  }

  getProductList(){
    this._cs.get('/productLists').subscribe(res => {
      this.productList = <Product[]>res;
    })

  }
}