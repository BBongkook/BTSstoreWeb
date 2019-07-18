import { Component, OnInit, Inject } from '@angular/core';
import { Notice } from '../vo/notice';
import { CommonService } from '../common/common.service';

declare var $: any;

@Component({
  selector: 'app-noticepage',
  templateUrl: './noticepage.component.html',
  styleUrls: ['./noticepage.component.css']
})
export class NoticepageComponent implements OnInit {
  notice:Notice = new Notice();
  n:Notice = new Notice();
  isWriteNotice:boolean=false;

  constructor(private _cs:CommonService) { 
    this._cs.get('/noticeList').subscribe(res => {
      this.notice = <Notice>res;
    })
  }

  ngOnInit() {
   if(sessionStorage.getItem('id')=='admin'){
     this.isWriteNotice=true;
    }
  }


  showModal():void {
    $("#myModal").modal('show');
  }
  sendModal(): void {
    this.insertNotice();
    this.hideModal();
  }
  hideModal():void {
    document.getElementById('close-modal').click();
  }

  //공지등록
  insertNotice(){
    this.n.ntWriter = '관리자';
    console.log(this.n);
    this._cs.post("/insertNotice",this.n).subscribe(res=>{
      if(res){
        alert('공지가 등록되었습니다.');
        location.href='noticepage';
      }else{
        alert('등록실패');
      }
    }
      )
  }

}