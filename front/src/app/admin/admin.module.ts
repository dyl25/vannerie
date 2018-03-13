import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminArticleComponent } from './admin-article.component';
import { AdminRoutingModule } from './admin-routing.module';
import {AuthService} from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
      AdminComponent,
      AdminDashboardComponent,
      AdminArticleComponent
  ],
  providers: [AuthService]
})
export class AdminModule { }
