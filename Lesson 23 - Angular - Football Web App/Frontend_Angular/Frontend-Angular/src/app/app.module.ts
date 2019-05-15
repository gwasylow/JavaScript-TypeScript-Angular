import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballService } from './services/football.service';
import { HttpClientModule } from '@angular/common/http';
import { ScoreViewComponent } from './score-view/score-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FootballService],
  bootstrap: [AppComponent]
})
export class AppModule { }
