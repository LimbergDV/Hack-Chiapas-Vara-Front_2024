import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilePageComponent } from './files/file-page/file-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { PageRegisterComponent } from './register/page-register/page-register.component';

import { HomeLandingPageComponent } from './home-landing/home-landing-page/home-landing-page.component';

const routes: Routes = [
  {path:'home-landing', component: HomeLandingPageComponent },
  {path:'uploadFiles', component: FilePageComponent },
  {path:'login', component: LoginPageComponent},
  {path:'register', component: PageRegisterComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
