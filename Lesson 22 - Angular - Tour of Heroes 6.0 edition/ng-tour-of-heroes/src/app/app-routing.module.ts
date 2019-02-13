import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { WebFormComponent } from './web-form/web-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { SecurityComponent } from './security/security.component';


//Map and explain to ng how are we going to navigate in application (UI/URL)
const routesMap : Routes = [
   { path : '', redirectTo: '/dashboard', pathMatch: 'full'},
   { path : 'heroes', component: HeroesComponent },
   { path : 'dashboard', component: DashboardComponent },
   { path : 'details/:id', component: HeroDetailComponent },
   { path : 'web-forms', component: WebFormComponent},
   { path : 'reactive-forms', component: ReactiveFormsComponent},
   { path : 'profile-editor-form', component: ProfileEditorComponent},
   { path : 'reactive-form-builder', component: FormBuilderComponent},
   { path : 'security', component: SecurityComponent }

];

@NgModule({
  //register our map as a ROOT
  imports: [ RouterModule.forRoot(routesMap) ],
  //make our routing module visible outside of itself (for entire ng application)
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
