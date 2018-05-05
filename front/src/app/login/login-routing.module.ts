import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from '../core/guards/auth-guard.service';
import {AuthService} from '../core/services/auth.service';
import {LoginComponent} from './login.component';

const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers: [
      AuthGuard,
      AuthService
  ]
})
export class LoginRoutingModule { }
