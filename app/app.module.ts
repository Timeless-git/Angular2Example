import './hero/shared/rxjs-extensions';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {AppRoutingModule} from "./app-routing.module";

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./hero/shared/in-memory-data.service";

import {HeroesComponent} from "./hero/heroes.component";
import {HeroDetailComponent} from "./hero/heroDetail/hero-detail.component";
import {DashboardComponent} from "./dashBoard/dashboard.component";
import {AppComponent} from "./app.component";
import {HeroService} from "./hero/shared/hero.service";
import {StudentFormComponent} from "./myForms/stutent-form.component";
import {HeroSearchComponent} from "./hero/heroSearch/hero-search.component";
import {CrisisListComponent} from "./crisislist/crisis-list.component";
import {AdminModule} from "./admin/admin.module";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule,
    AdminModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    StudentFormComponent,
    HeroSearchComponent,
    CrisisListComponent,
    LoginComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
