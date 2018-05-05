import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../core/guards/auth-guard.service';
import {AdminComponent} from './admin.component';
import {AdminDashboardComponent} from './admin-dashboard.component';
import {AdminArticlesComponent} from './articles/admin-articles.component';

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
                    {path: 'articles', component: AdminArticlesComponent}
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
