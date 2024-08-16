import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authorization: any;
  userId: any;
  role: any

  public loggedIn: BehaviorSubject<boolean>;
  constructor(private router: Router, public jwtHelper: JwtHelperService,
    private http: HttpClient,) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  //login api

  /** get authenticat state */
  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  /** Login  */
  postLogin(url: string, pbody: any): Observable<any> {
    url = environment.baseUrl + url;
    return this.http.post(url, pbody).pipe(map(res => res));
  }

  getGuestAuthApiData(url: any) {
    this.authorization = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : "";
    this.userId = sessionStorage.getItem('userId') ? sessionStorage.getItem('userId') : "";
    var options;
    url = environment.baseUrl + url;
    options = {
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': this.authorization,
        'userId': this.userId
      }
    };
    return this.http.get<any>(url, options)
      .pipe(
        tap(_ => console.log('test')),
        catchError(this.handleError('err', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (err: any): Observable<T> => {
      if (err.status == 500) {
        return err.error.message;
      }
      if (err.error.statusCode == 401) {
        this.router.navigate(['/login']);

      } else {
        return err;
      }
      return of(result as T);
    };
  }

  guestAuthGetapi(url: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getGuestAuthApiData(url).subscribe((res) => {
        resolve(res)
      }, err => {
        reject(err)
      })
    })
  }

  guestpost(url: string, pbody: any): Observable<any> {
    url = environment.baseUrl + url;
    return this.http.post(url, pbody).pipe(map(res => res));
  }

  postGuestAuthApiData(url: string, body: any): Observable<any> {
    this.authorization = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : "";
    this.userId = sessionStorage.getItem('userId') ? sessionStorage.getItem('userId') : "";
    url = environment.baseUrl + url;
    var options;
    options = { 'headers': { 'Content-Type': 'application/json', 'Authorization': this.authorization, 'userId': this.userId } };
    return this.http.post<any>(url, body, options)
      .pipe(
        tap(_ => console.log('test')),
        catchError((error: any) => {
          if (error.status === 500) {

          } else if (error.status === 401) {
            this.router.navigate(['/login']);
          }
          return throwError(error);
        })
      );
  }



  putGuestAuthApiData(url: string, body: any): Observable<any> {
    this.authorization = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : "";
    this.userId = sessionStorage.getItem('userId') ? sessionStorage.getItem('userId') : "";
    url = environment.baseUrl + url;
    var options;
    options = { 'headers': { 'Content-Type': 'application/json', 'Authorization': this.authorization, 'userId': this.userId } };
    return this.http.put<any>(url, body, options)
      .pipe(
        tap(_ => console.log('test')),
        catchError(this.handleError('err', []))
      );
  }

  deleteGuestAuthApiData(url: string): Observable<any> {
    this.authorization = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : "";
    this.userId = sessionStorage.getItem('userid') ? sessionStorage.getItem('userid') : "";
    url = environment.baseUrl + url;
    var options;
    options = { 'headers': { 'Content-Type': 'application/json', 'Authorization': this.authorization, 'userId': this.userId } };
    return this.http.delete<any>(url, options)
      .pipe(
        tap(_ => console.log('test')),
        catchError(this.handleError('err', []))
      );
  }

}

