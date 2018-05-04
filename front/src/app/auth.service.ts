import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {map, catchError} from 'rxjs/operators';
import { User } from './shared/models/user';



@Injectable()
export class AuthService {

    private authUrl: string = 'api';
    private headers = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'});

    currentUser;//: User;
    isLoggedIn = false;
    redirectUrl: string;

    constructor(private http: HttpClient) {}

    subscribe(user: User) {
        const url = `${this.authUrl}/subscribe`;

        return this.http.post(url, JSON.stringify(user), {headers: this.headers})
            .pipe(
            map(res => res),
            catchError(this.handleError)
            );
    }

    login(user: User) {
        const url = `${this.authUrl}/login`;

        return this.http.post(url, JSON.stringify(user), {headers: this.headers})
            .pipe(
            map(res => this.setCurrentUser(res)),
            catchError(this.handleError)
            );
    }

    setCurrentUser(res) {
        const url = `${this.authUrl}/user`;
        let accessToken: string = res.access_token;
        //let headers = new HttpHeaders({'authorization': 'application/json','Content-Type': 'application/json'});
        let authHeader = new HttpHeaders({'Authorization': 'Bearer' + accessToken});
        //Object.assign(authHeader, this.headers);
        return authHeader;
        // return this.http.get(url, {headers: this.headers})
        //     .pipe(
        //     map(res => this.currentUser = res),
        //     catchError(this.handleError)
        // );
    }

    getCurrentUser(): Observable<any> {
        return this.currentUser;
    }
    // logout() {
    //     this.isLoggedIn = false;
    //     const url = `${this.authUrl}/logout`;
    //
    //     return this.http.post(url, JSON.stringify(user), {headers: this.headers})
    //     .pipe(
    //       map(res => res),
    //       catchError(this.handleError)
    //     );
    // }

    private handleError(error: any): Observable<any> {
        console.error('Une erreur s\'est produite', error);

        return Observable.throw(error.message || error);
    }

}
