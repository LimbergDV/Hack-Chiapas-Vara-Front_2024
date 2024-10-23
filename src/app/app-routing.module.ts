import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { FoldersFilesPageComponent } from './folders-files/folders-files-page/folders-files-page.component';

const routes: Routes = [
  {path:'folders', component: FoldersFilesPageComponent },
  {path:'login', component: LoginPageComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
