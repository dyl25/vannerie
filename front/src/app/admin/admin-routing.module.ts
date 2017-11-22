import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../auth-guard.service';
import {AdminComponent} from './admin.component';
import {AdminDashboardComponent} from './admin-dashboard.component';
import {AdminArticleComponent} from './admin-article.component';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        //canActivate: [AuthGuard],
        children: [
            /*{
                path: '',
                children: [*/
                    {path: '', component: AdminDashboardComponent},
                    {path: 'articles', component: AdminArticleComponent}
                /*],
            },*/
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {}
//Resolve: pre-fetching component data
