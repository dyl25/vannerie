import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
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
export class ArticleDetailResolver /*implements Resolve<Article>*/ {

    constructor(private articleService: ArticlesService, private router: Router) {}


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void/* Observable<Article>*/ {
        let id: number = +route.paramMap.get('id');

        //return this.articleService.getArticle(id).catch();

        // return this.articleService.getArticle(id).then(article => {
        //   if(article) {
        //     return article;
        //   }
        // });
    }
}
