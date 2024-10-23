import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { AnimationSliderComponent } from './animation-slider/animation-slider.component';





@NgModule({
  declarations: [
    HomeLandingPageComponent,
    AnimationSliderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeLandingModule { }
