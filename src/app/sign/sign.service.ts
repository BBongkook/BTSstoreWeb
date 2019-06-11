import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Sign } from '../vo/sign';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  private baseUrl: string = 'http://localhost:80/'
  constructor() { }

  join(si: Sign) {
    return ajax.post(this.baseUrl + 'signup', si, { 'Content-Type': 'application/json', 'rxjs-custom-header': 'Rxjs' }
    )
  };
}
