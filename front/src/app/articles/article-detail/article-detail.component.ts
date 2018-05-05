import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Article } from '../../shared/models/article';
import { ArticlesService } from '../../core/services/articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit {

  article: Article;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: {article: Article}) => {
      this.article = data.article;
    });
  }

  goEdit(article: Article) {
    let link = ['articles/edit', article.id];

    this.router.navigate(link);
  }

}
