import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { AnimationSliderComponent } from './animation-slider/animation-slider.component';
import { CardImgComponent } from './card-img/card-img.component';
import { PricesComponent } from './prices/prices.component';





@NgModule({
  declarations: [
    HomeLandingPageComponent,
    AnimationSliderComponent,
    CardImgComponent,
    PricesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PricesComponent
  ]
})
export class HomeLandingModule { }
