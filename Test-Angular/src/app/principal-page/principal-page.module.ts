import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule
} from '@angular/material';

import {
    PrincipalPagesRoutingModule,
    routedComponents
} from './principal-page.routing';

@NgModule({
    imports: [
        CommonModule,
        PrincipalPagesRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatTableModule
    ],
    declarations: [
        routedComponents
    ]
})
export class PrincipalPageModule { }
