import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

//Map and explain to ng how are we going to navigate in application (UI/URL)
const routesMap : Routes = [
   { path : 'heroes', component: HeroesComponent }
];

@NgModule({
  //register our map as a ROOT
  imports: [ RouterModule.forRoot(routesMap) ],
  //make our routing module visible outside of itself (for entire ng application)
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
