import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { HomeLandingPageComponent } from './home-landing/home-landing-page/home-landing-page.component';
import { FoldersFilesPageComponent } from './folders-files/folders-files-page/folders-files-page.component';
import { ViewComponent } from './stogare/view/view.component';
import { AllFilesPageComponent } from './all-files/all-files-page/all-files-page.component';
import { CategorizedFilesPageComponent } from './folders-files/categorized-files-page/categorized-files-page.component';
import { UpgradeAccountPageComponent } from './upgrade-account/upgrade-account-page/upgrade-account-page.component';
import { PageRegisterComponent } from './register/page-register/page-register.component';


const routes: Routes = [
  {path:'login', component: LoginPageComponent},
  {path:'folders', component: FoldersFilesPageComponent },
  {path: 'folders/:id', component: FoldersFilesPageComponent }, 
  {path:'register', component: PageRegisterComponent},
  {path:'home-landing', component: HomeLandingPageComponent },
  {path:'register', component: PageRegisterComponent},
  {path:'stogare', component: ViewComponent},
  { path: 'folders/categorized', component: CategorizedFilesPageComponent },
  { path: 'allDocuments', component: AllFilesPageComponent},
  { path: 'upGrade', component: UpgradeAccountPageComponent},
  { path: '', redirectTo: '/home-landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
