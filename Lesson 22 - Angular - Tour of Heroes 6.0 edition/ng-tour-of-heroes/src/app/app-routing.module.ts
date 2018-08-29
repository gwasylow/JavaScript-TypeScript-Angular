import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//Map and explain to ng how are we going to navigate in application (UI/URL)
const routesMap : Routes = [
   { path : '', redirectTo: '/dashboard', pathMatch: 'full'},
   { path : 'heroes', component: HeroesComponent },
   { path : 'dashboard', component: DashboardComponent },
   { path : 'details/:id', component: HeroDetailComponent }
];

@NgModule({
  //register our map as a ROOT
  imports: [ RouterModule.forRoot(routesMap) ],
  //make our routing module visible outside of itself (for entire ng application)
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
