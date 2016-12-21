import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from "./dashBoard/dashboard.component";
import {HeroDetailComponent} from "./hero/heroDetail/hero-detail.component";
import {HeroesComponent} from "./hero/heroes.component";
import {StudentFormComponent} from "./myForms/stutent-form.component";
import {CrisisListComponent} from "./crisislist/crisis-list.component";


const routes: Routes = [
  { path: '', redirectTo: '/crisis-center', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  {path: 'student', component:StudentFormComponent},
  {path: 'crisis-center', component:CrisisListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
