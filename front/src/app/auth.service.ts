import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {map,catchError} from 'rxjs/operators';

import {User} from './users/user';

@Injectable()
export class AuthService {

    private oauthUrl : string = 'oauth';
    private authUrl : string = 'api';
    private headers = new HttpHeaders({'Accept': 'application/json','Content-Type': 'application/json'});

    isLoggedIn = false;
    redirectUrl: string;

    constructor(private http : HttpClient) {}

    subscribe(user: User) {
      //const url = `${this.authUrl}/subscribe`;
      const url = `${this.oauthUrl}/token`;
      const dataBody = {
        'grant_type': 'password',
        'client_id': '2',
        'client_secret': 'fcRWtn3BYU9HowOtryLbYDRF0B87FXVhfgS0M2a2',
        'scope': ''
    };

      Object.assign(dataBody, user);

      return this.http.post(url, JSON.stringify(dataBody), {headers: this.headers})
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
    }

    login(user: User) {

    }

    /*login(): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }*/

    logout(): void {
        this.isLoggedIn = false;
    }

    private handleError(error: any): Observable<any> {
      console.error('Une erreur s\'est produite', error);

      return Observable.throw(error.message || error);
    }

}
