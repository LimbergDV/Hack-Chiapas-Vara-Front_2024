import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folders-files-page',
  templateUrl: './folders-files-page.component.html',
  styleUrl: './folders-files-page.component.css'
})
export class FoldersFilesPageComponent {
  folderId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
   
    this.folderId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Folder ID:', this.folderId);

  //ACA VA LO DEMAS WEY
  }
}