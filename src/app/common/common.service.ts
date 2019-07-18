import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = "http://localhost:88"
const httpJson = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
const httpData = { headers: new HttpHeaders({ 'ENCTYPE-Type': 'multipart/form-data' }) }
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

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

  private makeFormData(obj): FormData {
    const formData = new FormData();
    for (var key in obj) {
      formData.append(key, obj[key]);
    }
    return formData;
  }
  postFile(obj) {
    const data = this.makeFormData(obj);
    return this._http.post(baseUrl + '/insertProduct', data);
  }
  postJson(obj) {
    const data = this.makeFormData(obj);
    return this._http.post(baseUrl + '/login', data);
  }
  

  sign(params) {
    return this._http.post(baseUrl + '/signup', params, httpJson);
  };

  delete(url, param?) {
    url = baseUrl + url;
    return this._http.delete(url,param);
  }

  put(url,params?) {
    url = baseUrl + url;
    return this._http.put(url, params, httpJson);
  }
}