import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Product } from 'src/app/vo/product';

@Component({
  selector: 'app-productinsert',
  templateUrl: './productinsert.component.html',
  styleUrls: ['./productinsert.component.css']
})
export class ProductinsertComponent implements OnInit {
  pd:Product = new Product();
  constructor(private cs:CommonService) { }

  ngOnInit() {
  }
  insertProduct(){
    console.log(this.pd);
    this.cs.postFile(this.pd).subscribe();
  }
  setFile(evt){
    this.pd.pImageFile = evt.target.files[0];
}
}
