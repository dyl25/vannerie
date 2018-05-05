import { BrowserModule, Title } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreationsModule } from './creations/creations.module';
import { HomeComponent } from './home/home.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from './shared/shared.module';
import { AdminArticlesModule } from './admin/articles/admin-articles.module';
import { CoreModule } from './core/core.module';
import { FrontLayoutComponent } from './front-layout/front-layout.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        DialogMessageComponent,
        SubscribeComponent,
        UsersComponent,
        FrontLayoutComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        CreationsModule,
        HttpClientModule,
        LoginRoutingModule,
        SharedModule,
        AdminArticlesModule,
        CoreModule
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
