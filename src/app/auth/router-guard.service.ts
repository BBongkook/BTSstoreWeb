import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router'
import { Observable } from 'rxjs';
import { eraseStyles } from '@angular/animations/browser/src/util';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate {
  constructor(private _router: Router) { }
  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // console.log(`id:${localStorage.getItem('id')}`);
    // console.log(`auth:${localStorage.getItem('auth')}`);
    if (localStorage.getItem('id')) {
      if (localStorage.getItem('auth') === '0'){
        return true;
      }
        return false;
    } else {
      this._router.navigate(['login']);
      return false;
    }
  }
}
