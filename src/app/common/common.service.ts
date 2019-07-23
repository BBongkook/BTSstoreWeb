import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


const baseUrl = "http://localhost:88"
const httpJson = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }),body:{} }
const httpData = { headers: new HttpHeaders({ 'ENCTYPE-Type': 'multipart/form-data' }) }
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  
  private makeFormData(obj): FormData {
    const formData = new FormData();
    for (var key in obj) {
      formData.append(key, obj[key]);
    }
    return formData;
  }


  get(url, params?) {
    url = baseUrl + url;
    return this._http.get(url);
  }

  getProD(url,params?){
    url = baseUrl + url;
    return this._http.get(url);
  }

  post(url,params) {
    url = baseUrl+ url;
    return this._http.post(url, params, httpJson);
  }

 
  postFile(url,obj) {
    const data = this.makeFormData(obj);
    url = baseUrl+ url;
    return this._http.post(url , data);
  }


  postJson(obj) {
    const data = this.makeFormData(obj);
    return this._http.post(baseUrl + '/login', data);
  }
  

  sign(params) {
    return this._http.post(baseUrl + '/signup', params, httpJson);
  };

  // makeParam(params):string{
  //   let str = '';
  //   for(let key in params){
  //     str += key + '=' + params[key];
  //   }
  //   if(str){
  //     str = str.substring(str.length-1);
  //   }
  //   return str;
  // }

  
  delete(url, params?) {
    url = baseUrl + url;
    httpJson.body = params;
    return this._http.delete(url,httpJson);
  }


  put(url,params?) {
    url = baseUrl + url;
    return this._http.put(url, params, httpJson);
  }
}