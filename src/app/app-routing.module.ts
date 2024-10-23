import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilePageComponent } from './files/file-page/file-page.component';
import { HomeLandingPageComponent } from './home-landing/home-landing-page/home-landing-page.component';

const routes: Routes = [
  {path:'home-landing', component: HomeLandingPageComponent },
  {path:'uploadFiles', component: FilePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
