import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { ArticlesComponent }     from './articles.component';
import {ArticleDetailComponent} from './article-detail.component';
import {ArticleDetailResolver} from './article-detail-resolver.service';
import { AddArticleComponent }     from './add-article.component';
import { EditArticleComponent }     from './edit-article.component';

const articlesRoutes: Routes = [

  {path: '', component: ArticlesComponent},
  {
    path: ':id',
    component: ArticleDetailComponent,
    resolve: {article: ArticleDetailResolver},
  },
  {path: 'add/:id', component: AddArticleComponent},
  {
    path: 'edit/:id',
    component: EditArticleComponent, 
    resolve:{article: ArticleDetailResolver}
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ArticleDetailResolver
  ]
})

export class ArticlesRoutingModule { }
