import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminArticlesComponent } from './admin-articles.component';
import { AdminArticleDetailComponent } from './article-detail/admin-article-detail.component';

const routes: Routes = [
  {path: '', component: AdminArticlesComponent},
  {path: ':id', component: AdminArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminArticlesRoutingModule { }
