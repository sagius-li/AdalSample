import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdalGuard } from 'adal-angular4';

import * as c from './';

const routes: Routes = [
  {
    path: '', component: c.MainComponent, canActivate: [AdalGuard],
    children: [
      { path: '', component: c.HomeComponent }
    ]
  },
  {
    path: 'error', loadChildren: './error-pages/error-pages.module#ErrorPagesModule'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
