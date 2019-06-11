import { Component, OnInit } from '@angular/core';
import { Sign } from '../vo/sign';
import { SignService } from './sign.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  ss: Sign = new Sign();
  uiPwd2: string = "";
  constructor(private _ss: SignService) { }
  daumAddressOptions =  {
    class: ['btn', 'btn-primary']
  };
   
  setDaumAddressApi(data){
    this.ss.uiAddr=data.addr;
    this.ss.uiZipcode=data.zip;
    
  }

  themeObj = {
    //bgColor: "", //바탕 배경색
    searchBgColor: "#0B65C8", //검색창 배경색
    //contentBgColor: "", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    //pageBgColor: "", //페이지 배경색
    //textColor: "", //기본 글자색
    queryTextColor: "#FFFFFF" //검색창 글자색
    //postcodeTextColor: "", //우편번호 글자색
    //emphTextColor: "", //강조 글자색
    //outlineColor: "", //테두리
 };
 
  
  ngOnInit() {
  }
  sign():any{
    if (!this.ss.uiName) {
      alert("이름을 입력해주세요.");
      return;
    } else if (!this.ss.uiId) {
      alert("아이디를 입력해주세요.");
      return;
    } else if (!this.ss.uiPwd) {
      alert("비밀번호를 입력해주세요.");
      return;
    } else if (this.ss.uiPwd != this.uiPwd2) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    } else if (!this.ss.uiTrans) {
      alert("성별을 선택해 주세요.");
      return;
    } else if(!this.ss.uiZipcode){
      alert("우편번호를 입력해주세요.");
      return;
    } else if (!this.ss.uiAddr) {
      alert("주소를 입력해주세요.");
      return;
    } else if (!this.ss.uiAddr2) {
      alert("상세주소를 입력해주세요.");
      return;
    } else if (!this.ss.uiPhone) {
      alert("휴대폰 번호를 입력해주세요.");
      return;
    }

    this._ss.join(this.ss).subscribe(res => {
      if(res.response){
        alert('회원가입이 성공하였습니다.');
        location.href = '/login';
      }else{
        alert('작성된 걸 확인하세요.');
      }
    });
  }

}
