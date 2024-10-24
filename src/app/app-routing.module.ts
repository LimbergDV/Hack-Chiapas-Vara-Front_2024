import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { PageRegisterComponent } from './register/page-register/page-register.component';
import { HomeLandingPageComponent } from './home-landing/home-landing-page/home-landing-page.component';
import { FoldersFilesPageComponent } from './folders-files/folders-files-page/folders-files-page.component';

const routes: Routes = [
  {path:'folders', component: FoldersFilesPageComponent },
  {path:'login', component: LoginPageComponent},
  {path:'home-landing', component: HomeLandingPageComponent },
  {path:'register', component: PageRegisterComponent},

  { path: '', redirectTo: '/home-landing', pathMatch: 'full' },
  { path: 'folders/:id', component: FoldersFilesPageComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
