import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoldersFilesPageComponent } from './folders-files-page/folders-files-page.component';
import { FoldersCategoryComponent } from './folders-category/folders-category.component';
import { DocumentsComponent } from './documents/documents.component';
import { CategorizedFilesPageComponent } from './categorized-files-page/categorized-files-page.component';
import { AllFilesModule } from '../all-files/all-files.module';



@NgModule({
  declarations: [
    FoldersFilesPageComponent,
    FoldersCategoryComponent,
    DocumentsComponent,
    CategorizedFilesPageComponent
  ],
  imports: [
    CommonModule,
    AllFilesModule
  ]
})
export class FoldersFilesModule { }
