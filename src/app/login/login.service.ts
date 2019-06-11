import { Injectable } from '@angular/core';

import { ajax } from 'rxjs/ajax';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { User } from '../vo/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = 'http://localhost:88/'
  constructor() { }

  doLogin(us: User) {
    return ajax.post(this.baseUrl + 'login', us, { 'Content-Type': 'application/json', 'rxjs-custom-header': 'Rxjs' }
    );
  }


}
