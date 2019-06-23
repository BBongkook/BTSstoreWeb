import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HttpClient } from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  url = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goPage() {
    return this.router.navigateByUrl('/' + this.url);
  }

}


