import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminArticlesRoutingModule } from './admin-articles-routing.module';
import { AdminArticlesComponent } from './admin-articles.component';
import { AdminArticleDetailComponent } from './article-detail/admin-article-detail.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminArticlesRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminArticlesComponent,
    AdminArticleDetailComponent
  ]
})
export class AdminArticlesModule { }
