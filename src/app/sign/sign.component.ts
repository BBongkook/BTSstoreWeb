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

  ngOnInit() {
  }
  sign(): void {
    if (!this.ss.uiName) {
      alert("이름을 입력해주세요.");
    } else if (!this.ss.uiId) {
      alert("아이디를 입력해주세요.");
    } else if (!this.ss.uiPwd) {
      alert("비밀번호를 입력해주세요.");
    } else if (this.ss.uiPwd != this.uiPwd2) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    } else if (!this.ss.uiTrans) {
      alert("성별을 선택해 주세요.");
    } else if (!this.ss.uiAddr) {

    } else if (!this.ss.uiAddr2) {

    } else if (!this.ss.uiPhone) {

    }
  }
}
