import { Component, OnInit } from '@angular/core';
import { Sign } from '../vo/sign';
import { SignService } from './sign.service';

@Component({
  selector: 'app-test-insert',
  templateUrl: './test-insert.component.html',
  styleUrls: ['./test-insert.component.css']
})
export class TestInsertComponent implements OnInit {
  ss: Sign = new Sign();
  constructor(private _ss :SignService) { }

  ngOnInit() {
  }

  sign(): any {
    this._ss.sign(this.ss).subscribe(res => {
      if (res.response) {
        alert('회원가입이 성공하였습니다.');
        location.href = '/login';
      } else {
        alert('회원가입에 실패하였습니다.');
      }
    });
  }
}
