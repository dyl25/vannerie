import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {Article} from './article';

@Injectable()
export class ArticlesService {

    private articlesUrl = 'api/articles'
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getArticle(id: number): Promise<Article> {
        return this.http.get(`${this.articlesUrl}/${id}`)
            .toPromise()
            .then(response => response.json() as Article)
            .catch(this.handleError);
    }

     getArticles(): Observable<Article[]>/*Promise<Article[]>*/ {
       return this.http
        .get(this.articlesUrl)
        .map(response => response.json() as Article[])
        .catch(this.handleError);
            // .toPromise()
            // .then(response => response.json() as Article[])
            // .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Une erreur s\'est produite', error);

        return Promise.reject(error.message || error);
    }

}
