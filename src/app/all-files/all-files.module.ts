import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFilesPageComponent } from './all-files-page/all-files-page.component';
import { AddComponent } from './modals/add-modal/add-modal.component';
import { AddNewButtonComponent } from './add-new-button/add-new-button.component';

@NgModule({
  declarations: [
    AllFilesPageComponent,
    AddComponent,
    AddNewButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddNewButtonComponent,
   
  ]
})
export class AllFilesModule { }
