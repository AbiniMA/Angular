import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
   }

    //BuyeremailVerification
  emailVerification(postData: any): Observable<any> {
    const url = `api/users/emailVerification`;
    return this.auth.postGuestAuthApiData(url, postData).pipe(map(res => res));
  }

  // buyersignup
  buyersignup(postData: any): Observable<any> {
    const url = `api/users/register`;
    return this.auth.postGuestAuthApiData(url, postData).pipe(map(res => res));
  }

  // buyerLogin
  buyerLogin(postData: any): Observable<any> {
    const url = `api/users/login`;
    return this.auth.postGuestAuthApiData(url, postData).pipe(map(res => res));
  }
}
