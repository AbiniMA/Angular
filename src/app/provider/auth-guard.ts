import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router:Router) {}
  canActivate():boolean {
    const item = sessionStorage.getItem('userInfo');
    if (!item) {
        this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}