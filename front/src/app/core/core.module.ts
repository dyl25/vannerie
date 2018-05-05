import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesService } from './services/articles.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ArticlesService,
    AuthService
  ]
})
export class CoreModule { }
