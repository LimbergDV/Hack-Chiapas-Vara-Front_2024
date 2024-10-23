import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilePageComponent } from './files/file-page/file-page.component';

const routes: Routes = [
  {path:'uploadFiles', component: FilePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
