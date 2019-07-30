import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Sign } from '../vo/sign';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  private baseUrl: string = 'https://a.btsstore.shop'
  constructor(private _http:HttpClient) { }


  get(url,params?){
    url = this.baseUrl + url;
    return this._http.get(url);
  }

} 
