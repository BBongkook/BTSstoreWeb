import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../vo/product';
import { CommonService } from '../common/common.service';
import { AuthInterceptorService } from '../auth/auth-interceptor.service';
import { Cart } from '../vo/cart';


declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  url = '';
  pNum: number;
  //productvo  호출.
  product: Product[];
  pname: string;
  pimageUri: string;
  c: Cart = new Cart();

  //productvo 호출한후 제품리스트 생성. 즉, 화면에 대응하는 vo배열
  productList: Product[] = [];
  constructor(private router: Router, private _cs: CommonService, private _auservice: AuthInterceptorService, private _router:Router) {
  this.c.cAmount =1;
  }
  ngOnInit() {
    this._cs.get('/productListsBypCount').subscribe(res => {
      this.product = <Product[]>res;
      for (var i = 0; i < this.product.length; i++) {
        var pPriceToString = "" + this.product[i].pprice;
        var pPriceComma = pPriceToString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.product[i].pprice = <any>pPriceComma;

      }
      console.log(this.product)
    })
  }
  goPage(url: string) {
    this._router.navigate([url]);
  }

  goViewPage(pNum) {
    sessionStorage.setItem('pNum', pNum);
    location.href = 'productview';
  }

  showModal(product): void {
    this.c.pNum = product.pnum;
    this.pname = product.pname;
    this.pimageUri = product.pimageUri;
    

    $("#myModal").modal('show');
  }
  addCart(): void {
    this.c.uiId = sessionStorage.getItem('id');
    this._cs.postFile('/insertCart', this.c).subscribe(res => {
      if (res) {
        alert('선택하신 상품이 장바구니에 추가되었습니다');
        this.c.cAmount = null;
      }
    })
    this.hideModal();
  }
  hideModal(): void {
    document.getElementById('close-modal').click();
    this.c.cAmount =1;
  }
}
