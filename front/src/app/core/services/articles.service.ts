import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { map, catchError } from 'rxjs/operators';
import { Article } from '../../shared/models/article';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class ArticlesService {

  private articlesUrl = 'api/articles'

  constructor(private http: HttpClient) { }

  getArticle(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;

    return this.http.get<Article>(url).pipe(
      catchError(this.handleError<Article>(`getArticle id=${id}`))
    );
  }

  getArticles(): Observable<Article[]> {
    return this.http
      .get<Article[]>(this.articlesUrl).pipe(
        catchError(this.handleError<Article[]>('getArticles', []))
      );
  }

  updateArticle(article: Article): Observable<Article> {
    const url = `${this.articlesUrl}/${article.id}`;

    return this.http
      .patch(url, article, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateArticle'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error('Une erreur s\'est produite', error);

      return of(result as T);
    }
  }

}
