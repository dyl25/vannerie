import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Article} from '../shared/models/article';
import { ArticlesService } from '../shared/services/articles.service';

@Component({
    selector: 'app-articles',
    template: `
    <section class="container">
      <div class="row">
        <h2>Ajouter un article</h2>
        <article-form [article]="article"></article-form>
      </div>
    </section>
    `,
    styleUrls: ['./articles.component.css']
})
export class EditArticleComponent implements OnInit{
  article: Article = null;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit():void {
    this.route.data.subscribe((data: {article: Article}) => {
      this.article = data.article;
    });
  }
}
