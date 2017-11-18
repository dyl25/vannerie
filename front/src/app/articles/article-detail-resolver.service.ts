// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
import {map, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import {Article} from './article';
import {ArticlesService} from './articles.service';

@Injectable()
export class ArticleDetailResolver implements Resolve<Article> {

  constructor(private articlesService: ArticlesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> {
    let id: number = +route.params['id'];

    return this.articlesService.getArticle(id).pipe(
      take(1),
      map(article => {
        if(article) {
          return article;
        }else{
          this.router.navigate(['/articles']);
          return null;
        }
      }));

    }
  }
