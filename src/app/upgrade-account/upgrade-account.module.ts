import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeAccountPageComponent } from './upgrade-account-page/upgrade-account-page.component';
import { PricesComponent } from '../home-landing/prices/prices.component';
import { HomeLandingModule } from '../home-landing/home-landing.module';



@NgModule({
  declarations: [
    UpgradeAccountPageComponent
  ],
  imports: [
    CommonModule,
    HomeLandingModule
  ]
})
export class UpgradeAccountModule { }
