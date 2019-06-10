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
  uiPwd2 :string ="";
  constructor(private _ss: SignService) { }

  ngOnInit() {
  }
  sign() : void{
    if(!this.ss.uiId){
      alert("아이디를 입력해주세요.");
    }
    if(!this.ss.uiPwd){
      alert("비밀번호를 입력해주세요.");
    }else(this.ss.uiPwd != this.uiPwd2)
    alert("뭐꼬이거?");
    
  }
}
