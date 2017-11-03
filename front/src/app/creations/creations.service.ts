import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Creation } from './creation';

@Injectable()
export class CreationsService {

    private creationsUrl = 'api/creations';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getCreations(): Promise<Creation[]> {
        return this.http.get(this.creationsUrl)
            .toPromise()
            .then(response => response.json() as Creation[])
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('Une erreur s\'est produite', error);
        
        return Promise.reject(error.message || error);
    }

}
