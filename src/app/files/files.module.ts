import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePageComponent } from './file-page/file-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilePageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
})
export class FilesModule { }
