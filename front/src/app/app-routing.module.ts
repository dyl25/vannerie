import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FrontLayoutComponent} from './front-layout/front-layout.component';
import {HomeComponent} from './home/home.component';
import {ArticlesComponent} from './articles/articles.component';
import {CreationsComponent} from './creations/creations.component';
import {SubscribeComponent} from './subscribe/subscribe.component';

const routes: Routes = [
    {
        //permet d'appliquer un layout différent pour chaque espace
        path: '',
        component: FrontLayoutComponent,
        children: [
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'articles', loadChildren: 'app/articles/articles.module#ArticlesModule'},
            {path: 'creations', component: CreationsComponent},
            {path: 'subscribe', component: SubscribeComponent},
        ]
    },
    {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
