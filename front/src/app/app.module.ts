import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FrontLayoutComponent} from './front-layout/front-layout.component';
import {ArticlesModule} from './articles/articles.module';
import {CreationsModule} from './creations/creations.module';
import {HomeComponent} from './home/home.component';
import {AdminModule} from './admin/admin.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FrontLayoutComponent,
        LoginComponent,
        DialogMessageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ArticlesModule,
        CreationsModule,
        HttpModule,
        AdminModule,
        LoginRoutingModule
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
