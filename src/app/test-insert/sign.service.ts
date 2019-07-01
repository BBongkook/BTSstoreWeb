import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Sign } from '../vo/sign';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  private baseUrl: string = 'http://localhost:88/'
  constructor(private _http:HttpClient) { }


  get(url,params?){
    url = this.baseUrl + url;
    return this._http.get(url);
  }

  sign(si: Sign) {
    return ajax.post(this.baseUrl + 'testinsert', si, { 'Content-Type': 'application/json', 'rxjs-custom-header': 'Rxjs' }
    )
  };
}
