import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeLandingModule } from './home-landing/home-landing.module';
import { AsideComponent } from './aside/aside.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UpgradeAccountModule } from './upgrade-account/upgrade-account.module';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AsideComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeLandingModule,
    UpgradeAccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
