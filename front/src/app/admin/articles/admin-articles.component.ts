import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from "../../shared/models/article";
import { ArticlesService } from "../../shared/services/articles.service";

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
})
export class AdminArticlesComponent implements OnInit {

  constructor(private articlesService: ArticlesService, private router: Router) { }

  articles: Article[];

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articlesService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

  selectArticle(article: Article) {
    let link = ['/articles', article.id];

    this.router.navigate(link);
  }

}
