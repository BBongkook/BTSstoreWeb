import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private _router:Router) { 

  }
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    var uiId = localStorage.getItem('id');
    var tokken = localStorage.getItem('token');
    var headers:HttpHeaders = new HttpHeaders();
    console.log(tokken);
    console.log(req);
    if(req.url.indexOf('sign')!=-1 || req.url.indexOf('userId')!=-1 || req.url.indexOf('productDivide')!=-1 ||req.url.indexOf('productLists')!=-1){
      return next.handle(req);
    }
    else if(req.url.indexOf('login')==-1 && !tokken){
      this._router.navigate(['/login']);
      return throwError('Auth Error');
    }else if(tokken){
      headers = new HttpHeaders().set('X-AUTH-ID',uiId).set('x-auth-tokken',tokken);
    }
    const authReq = req.clone({headers});
    console.log(authReq);
    return next.handle(authReq);
  }
}