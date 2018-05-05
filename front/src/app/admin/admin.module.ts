import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import {AuthService} from '../core/services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { AdminArticlesModule } from './articles/admin-articles.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    AdminArticlesModule
  ],
  declarations: [
      AdminComponent,
      AdminDashboardComponent
  ],
  providers: [AuthService]
})
export class AdminModule { }
