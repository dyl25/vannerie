import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ArticlesService} from './articles.service';
import {ArticlesRoutingModule} from './articles-routing.module';
import {ArticlesComponent} from './articles.component';
import {ArticleDetailComponent} from './article-detail.component';
import {ArticleFormComponent} from './article-form.component';
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
  ],
  providers: [
      ArticlesService
  ]
})
export class ArticlesModule { }
