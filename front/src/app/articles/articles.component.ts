import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Article} from './article';
import {ArticlesService} from './articles.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

    articles: Article[];

    constructor(private articlesService: ArticlesService, private router: Router) {}

    getArticles(): void {
        this.articlesService.getArticles().subscribe(articles => {
          this.articles = articles;
        });
    }

    ngOnInit() {
        this.getArticles();
    }

    selectArticle(article: Article) {
      let link = ['/articles', article.id];

      this.router.navigate(link);
    }

}
