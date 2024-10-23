import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeLandingModule } from './home-landing/home-landing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeLandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
