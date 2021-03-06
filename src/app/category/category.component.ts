import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductComponent } from '../productTable/product.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private _moverouter: Router) { }
  userId:string = sessionStorage.getItem('id');
  ngOnInit() {
  }
  goProd(prod:string, url:string) {
    sessionStorage.setItem('prod',prod);
    location.href='product'
  }
}
