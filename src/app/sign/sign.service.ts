import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Sign } from '../vo/sign';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  private baseUrl: string = 'http://localhost:88/'
  constructor() { }

  sign(si: Sign) {
    return ajax.post(this.baseUrl + 'signup', si, { 'Content-Type': 'application/json', 'rxjs-custom-header': 'Rxjs' }
    )
  };
}
