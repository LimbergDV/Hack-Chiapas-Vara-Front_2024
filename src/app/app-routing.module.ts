import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { HomeLandingPageComponent } from './home-landing/home-landing-page/home-landing-page.component';
import { FoldersFilesPageComponent } from './folders-files/folders-files-page/folders-files-page.component';
import { AllFilesPageComponent } from './all-files/all-files-page/all-files-page.component';

const routes: Routes = [
  {path:'login', component: LoginPageComponent},
  {path:'folders', component: FoldersFilesPageComponent },
  {path: 'folders/:id', component: FoldersFilesPageComponent }, 
  {path:'login', component: LoginPageComponent},
  {path:'home-landing', component: HomeLandingPageComponent },
  
  { path: 'allDocuments', component: AllFilesPageComponent},
  { path: '', redirectTo: '/home-landing', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
