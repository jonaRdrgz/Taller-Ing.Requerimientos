import { ModuleWithProviders } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { PrincipalPageComponent } from './principal-page.component';
import { HomePageComponent } from './home/home.component';
import { UserListPageComponent } from './user-list/user-list.component';

const routes: Routes = [
    {
        path: '',
        component: PrincipalPageComponent,
        children: [
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: 'user-list',
                component: UserListPageComponent
            }
        ]
    }
];

export const PrincipalPagesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
export const routedComponents = [
    PrincipalPageComponent,
    HomePageComponent,
    UserListPageComponent
];
