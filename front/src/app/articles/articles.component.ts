import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../shared/models/article';
import { ArticlesService } from '../shared/services/articles.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

    articles: Article[];
    appear: boolean = false;

    constructor(private articlesService: ArticlesService, private router: Router) { }

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

    /*addArticle() {
        let article = {"id": 5620,
            "title": "bla bla bla",
            "slug": "bla-bla",
            "content": "bla bla bla bla bla bla bla bla bla bla bla bla",
            "author": User,
            "created_at": new Date(),
            "updated_at": new Date()
        };
        this.articles.unshift(article);
        this.appear = true;
    }*/

}
