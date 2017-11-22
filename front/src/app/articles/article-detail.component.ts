import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Article} from './article';
import {ArticlesService} from './articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  //styleUrls: ['./article-detail.component.css']
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
      /*let perso = {'grant_type': 'password', 'client_id': '2'};
      let merge = this.article;
      console.log(Object.assign(merge, perso));*/
    });
  }

  goEdit(article: Article) {
    let link = ['articles/edit', article.id];

    this.router.navigate(link);
  }

}
