import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoldersFilesPageComponent } from './folders-files-page/folders-files-page.component';
import { FoldersCategoryComponent } from './folders-category/folders-category.component';
import { DocumentsComponent } from './documents/documents.component';



@NgModule({
  declarations: [
    FoldersFilesPageComponent,
    FoldersCategoryComponent,
    DocumentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FoldersFilesModule { }
