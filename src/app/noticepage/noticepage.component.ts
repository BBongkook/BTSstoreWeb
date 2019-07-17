import { Component, OnInit } from '@angular/core';
import { Notice } from '../vo/notice';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-noticepage',
  templateUrl: './noticepage.component.html',
  styleUrls: ['./noticepage.component.css']
})
export class NoticepageComponent implements OnInit {
  notice:Notice = new Notice();

  constructor(private _cs:CommonService,) { 
    
  }

  ngOnInit() {
   this.getNoticeList();
  }

  getNoticeList(){
    this._cs.get('/noticeList').subscribe(res => {
      this.notice = <Notice>res;
      console.log(this.notice)
    })
  }

  
}
