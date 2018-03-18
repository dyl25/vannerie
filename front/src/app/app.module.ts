import {BrowserModule, Title} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {FrontLayoutComponent} from './front-layout/front-layout.component';
import {ArticlesModule} from './articles/articles.module';
import {CreationsModule} from './creations/creations.module';
import {HomeComponent} from './home/home.component';
import {AdminModule} from './admin/admin.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from './shared/shared.module';
import { ArticlesService } from './shared/services/articles.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FrontLayoutComponent,
        LoginComponent,
        DialogMessageComponent,
        SubscribeComponent,
        UsersComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        ArticlesModule,
        CreationsModule,
        HttpClientModule,
        AdminModule,
        LoginRoutingModule,
        SharedModule
    ],
    providers: [
        Title,
        ArticlesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
