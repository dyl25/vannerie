import {Component, OnInit} from '@angular/core';

import {Article} from './article';
import {ArticlesService} from './articles.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

    articles: Article[];

    constructor(private articlesService: ArticlesService) {}

    getHeroes(): void {
        this.articlesService.getArticles().subscribe((articles) => {
          this.articles = articles;
        });/*.then(articles => this.articles = articles)*/;
    }

    ngOnInit() {
        this.getHeroes();
    }
}
