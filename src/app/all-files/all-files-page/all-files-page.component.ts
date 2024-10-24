import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/document.service';
import { IDocumentReceive } from '../interfaces/idocument-receive';
@Component({
  selector: 'app-trainers-p',
  templateUrl: './all-files-page.component.html',
  styleUrl: './all-files-page.component.css',
})
export class AllFilesPageComponent implements OnInit {
  documents: IDocumentReceive[] = [];

  //MODALS
  showModal: boolean = false;
  
  selectedDocument: IDocumentReceive | null = null;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.getTrainers();
  }

  getTrainers(): void {
    this.documentService.obtainDocumentsOfAUser(1).subscribe(
      (response) => {
        this.documents = response;
        console.log(response)
      },
      (error) => {
        console.log(error)
        alert('Existe un error');
      }
    );
  }

  //ADD

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedDocument = null;
  }

  onTrainerAdded(document: IDocumentReceive) {
    this.documents.push(document);
    this.closeModal();
  }

}
