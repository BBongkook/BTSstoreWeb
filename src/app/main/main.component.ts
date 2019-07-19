import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../vo/product';
import { CommonService } from '../common/common.service';
import { AuthInterceptorService } from '../auth/auth-interceptor.service';


declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  url = '';
  pNum:number;
  //productvo  호출.
  product: Product[];
  pname:string;
  pimageUri:string;


  //productvo 호출한후 제품리스트 생성. 즉, 화면에 대응하는 vo배열
  productList: Product[] = [];
  constructor(private router: Router, private _cs : CommonService, private _auservice : AuthInterceptorService) {
      this._cs.get('/productListsBypCount').subscribe(res=>{
        this.product = <Product[]>res;
        console.log(this.product)
      })
  }      
  ngOnInit() {
  }
  goPage() {
    //return this.router.navigateByUrl('/' + this.url);
  }
  goViewPage(pNum){
    sessionStorage.setItem('pNum',pNum);
    location.href='productview';
  }

  

  showModal(product):void {
    console.log(product);
    this.pNum = product.pNum;
    this.pname = product.pname;
    this.pimageUri = product.pimageUri;

    $("#myModal").modal('show');
  }
  sendModal(): void {
   
    this.hideModal();
    location.href='noticepage';
  }
  hideModal():void {
    document.getElementById('close-modal').click();
    document.getElementById('close-modal1').click();
  }
}


