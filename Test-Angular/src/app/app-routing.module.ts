import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'principal-page',
    loadChildren: 'src/app/principal-page/principal-page.module#PrincipalPageModule'
  },
  {
    path: '',
    redirectTo: 'principal-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
