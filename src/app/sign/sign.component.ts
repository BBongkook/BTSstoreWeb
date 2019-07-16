import { Component, OnInit } from '@angular/core';
import { Sign } from '../vo/sign';
import { SignService } from './sign.service';
import { User } from '../vo/user';
import { FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  ss: Sign = new Sign();
  uiPwd2: string = "";
  isUnique: boolean = false;
  pw_passed: boolean = true;
  constructor(private _ss: SignService, private _cs: CommonService) { }
  daumAddressOptions = {
    class: ['btn', 'mat-raised-button']
  };

  setDaumAddressApi(data) {
    this.ss.uiAddr = data.addr;
    this.ss.uiZipcode = data.zip;

  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }



  ngOnInit() {
  }
  sign(): any {
    var pw = this.ss.uiPwd;
    var id = this.ss.uiId;
    var pattern1 = /[0-9]/;
    var pattern2 = /[a-zA-Z]/;
    var pattern3 = /[~!@\#$%<>^&*]/;     // 원하는 특수문자 추가 제거

    if (!this.ss.uiName) {
      alert("이름을 입력해주세요.");
      return;
    }

    else if (!this.ss.uiId) {
      alert("아이디를 입력해주세요.");
      return;
    }

    else if (!this.ss.uiPwd) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    else if (this.ss.uiPwd != this.uiPwd2) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    // 여기서부터 비밀번호 특수문자 확인로직.
    else if (!pattern1.test(pw) || !pattern2.test(pw) || !pattern3.test(pw) || pw.length < 8 || pw.length > 50) {
      alert("영문+숫자+특수기호 8자리 이상으로 구성하여야 합니다.");
      return false;
    }

    else if (pw.indexOf(id) > -1) {
      alert("비밀번호는 ID를 포함할 수 없습니다.");
      return false;
    }
    //까지 비밀번호 확인 로직
    else if (!this.ss.uiTrans) {
      alert("성별을 선택해 주세요.");
      return;
    }

    else if (!this.ss.uiZipcode) {
      alert("우편번호를 입력해주세요.");
      return;
    }

    else if (!this.ss.uiAddr) {
      alert("주소를 입력해주세요.");
      return;
    }

    else if (!this.ss.uiAddr2) {
      alert("상세주소를 입력해주세요.");
      return;
    }

    else if (!this.ss.uiPhone) {
      alert("휴대폰 번호를 입력해주세요.");
      return;
    }

    this._cs.sign(this.ss).subscribe(res => {
      if (res) {
        alert('회원가입이 성공하였습니다.');
        location.href = '/login';
      } else {
        alert('회원가입에 실패하였습니다.');
      }
    });
  }

  checkId() {
    var url = "userId/" + this.ss.uiId;
    this._ss.get(url).subscribe(
      res => {
        if (!res) {
          if (this.ss.uiId == null || this.ss.uiId == '') {
            alert('아이디를 입력해주세요.');
          } else {
            alert(this.ss.uiId + '는 사용 가능한 아이디 입니다.')
            this.isUnique = true;

          }

        } else {
          alert(this.ss.uiId + '는 중복 아이디 입니다.')
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  checkPwd() {
    var pw = this.ss.uiPwd;
    var id = this.ss.uiId;
    var pattern1 = /[0-9]/;
    var pattern2 = /[a-zA-Z]/;
    var pattern3 = /[~!@\#$%<>^&*]/;     // 원하는 특수문자 추가 제거

    if (!pattern1.test(pw) || !pattern2.test(pw) || !pattern3.test(pw) || pw.length < 8 || pw.length > 50) {
      alert("영문+숫자+특수기호 8자리 이상으로 구성하여야 합니다.");
      return false;
    } else if (pw.indexOf(id) > -1) {
      alert("비밀번호는 ID를 포함할 수 없습니다.");
      return false;
    } else if (this.ss.uiPwd === this.uiPwd2) {
      alert('비밀번호가 일치합니다.')
    } else {
      alert('비밀번호가 일치하지 않습니다.')
    }

  }

}

