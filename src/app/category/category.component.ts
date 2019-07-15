import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private _moverouter: Router) { }
  userId:string = localStorage.getItem('id');
  ngOnInit() {
  }
  goProd(prod:string, url:string) {
    localStorage.setItem('prod',prod);
    location.href='product'
  }
}
