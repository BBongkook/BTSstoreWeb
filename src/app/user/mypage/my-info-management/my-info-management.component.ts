import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/vo/user';
import { CommonService } from 'src/app/common/common.service';
import { CssKeyframesDriver } from '@angular/animations/browser/src/render/css_keyframes/css_keyframes_driver';
import { EmailValidator, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-my-info-management',
  templateUrl: './my-info-management.component.html',
  styleUrls: ['./my-info-management.component.css']
})
export class MyInfoManagementComponent implements OnInit {
  pass1: string = "";
  pass2: string = "";

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  user: User = new User();

  constructor(private cs: CommonService) { }

  daumAddressOptions = {
    class: ['btn', 'mat-raised-button']
  };

  setDaumAddressApi(data) {
    this.user.uiAddr = data.addr;
    this.user.uiZipcode = data.zip;

  }


  ngOnInit() {
    console.log(sessionStorage.getItem('id'));
    this.getMyInfo();
  }
  modifyMyinfo() {
    //유저정보 콘솔.
    console.log(this.user)

    this.cs.post('/login',this.user).subscribe(res => {
      if (res) {
        if (this.pass1 != '' && this.pass2 != '') {
          if (this.pass1 == this.pass2) {
            this.user.uiPwd = this.pass1;
            this.cs.put('/updateUser', this.user).subscribe(res => {
              if (res) {
                alert('회원정보가 수정되었습니다.');
                location.href = '/mypage';
                return;
              }
            })
          } else {
            alert('새 비밀번호를 확인해주세요');
            return;
          }
        }else{
          this.cs.put('/updateUser', this.user).subscribe(res => {
            if (res) {
              alert('회원정보가 수정되었습니다.');
              location.href = '/mypage';
              return;
            }
          })
        }
      } else {
        alert('비밀번호를 확인해주세요');
      }
    })



  }
  getMyInfo() {
    this.cs.get('/userId/' + sessionStorage.getItem('id')).subscribe(
      res => {
        console.log(res);
        this.user = <User>res;
      }
    )
  }
  changeTrans(evt) {
    this.user.uiTrans = evt.value;
    console.log(this.user.uiTrans);
  }
}