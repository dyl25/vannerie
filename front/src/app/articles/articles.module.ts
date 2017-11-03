import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ArticlesService} from './articles.service';
import {ArticlesComponent} from './articles.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ArticlesComponent
  ],
  providers: [
      ArticlesService
  ]
})
export class ArticlesModule { }
