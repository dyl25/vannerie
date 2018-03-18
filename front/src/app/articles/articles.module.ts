import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ArticlesRoutingModule} from './articles-routing.module';
import {ArticlesComponent} from './articles.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {AddArticleComponent} from './add-article.component';
import {EditArticleComponent} from './edit-article.component';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
      ArticlesComponent,
      ArticleDetailComponent,
      ArticleFormComponent,
      AddArticleComponent,
      EditArticleComponent
  ]
})
export class ArticlesModule { }
