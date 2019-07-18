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
  notice:Notice[];
  n:Notice = new Notice();
  noticeView:Notice = new Notice();
  isWriteNotice:boolean=false;
  title:string;
  content:string;
  ntNum:number;

  constructor(private _cs:CommonService) { 
    this._cs.get('/noticeList').subscribe(res => {
      this.notice = <Notice[]>res;
      console.log(this.notice);
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

  showModalView(nt):void {
    console.log(nt);
   this.ntNum=nt.ntNum;
   this.title=nt.ntTitle;
   this.content=nt.ntContent;
    $("#myModal").modal('show');
    

  }

  sendModal(): void {
    this.insertNotice();
    this.hideModal();
    location.href='noticepage';
  }
  hideModal():void {
    document.getElementById('close-modal').click();
    document.getElementById('close-modal1').click();
  }

  //공지등록
  insertNotice(){
    this.n.ntWriter = '관리자';
    console.log(this.n);
    this._cs.post("/insertNotice",this.n).subscribe(res=>{
      if(res){
        alert('공지가 등록되었습니다.');
      }else{
        alert('등록실패');
      }
    }
      )
  }

  deleteNotice(){
    console.log(this.ntNum);
    this._cs.delete('/deleteNotice/'+this.ntNum).subscribe(res=>{
      if(res){
        alert('삭제되었습니다');
       
      }
    });
    this.hideModal();
    location.href='noticepage';
  }


}