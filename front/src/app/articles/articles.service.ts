import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import {map,catchError} from 'rxjs/operators';
import {Article} from './article';

@Injectable()
export class ArticlesService {

  private articlesUrl = 'api/articles'
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getArticle(id: number): Observable<Article> {
    return this.http.get(`${this.articlesUrl}/${id}`).pipe(
      map(article => {return article}),
      catchError(this.handleError)
    );
  }

  getArticles(): Observable<Article[]> {
    return this.http
    .get(this.articlesUrl).pipe(
      catchError(this.handleError)
    );
  }

  updateArticle(article: Article): Observable<Article> {
    const url = `${this.articlesUrl}/${article.id}`;

    return this.http
    .patch(url, JSON.stringify(article), {headers: this.headers})
    .pipe(
      map(res => res as Article),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('Une erreur s\'est produite', error);

    return Observable.throw(error.message || error);
  }

}
