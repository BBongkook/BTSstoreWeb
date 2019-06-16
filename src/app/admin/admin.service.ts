import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl: string = 'http://localhost:88/'
  constructor() { }
  
  loadUserList() {
    return ajax.get(this.baseUrl + 'userlist')
  };
}
