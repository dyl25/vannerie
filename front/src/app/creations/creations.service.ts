import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Creation } from './creation';

@Injectable()
export class CreationsService {

    private creationsUrl = 'api/creations';
    //private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {}

    getCreations(): Promise<Creation[]> {
        return this.http.get(this.creationsUrl)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Une erreur s\'est produite', error);

        return Promise.reject(error.message || error);
    }

}
