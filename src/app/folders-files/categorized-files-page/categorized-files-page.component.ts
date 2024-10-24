import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../all-files/services/document.service';
import { IDocumentReceive } from '../../all-files/interfaces/idocument-receive';

@Component({
  selector: 'app-categorized-files-page',
  templateUrl: './categorized-files-page.component.html',
  styleUrls: ['./categorized-files-page.component.css'],
})
export class CategorizedFilesPageComponent implements OnInit {
  personalDocuments: IDocumentReceive[] = [];
  academicDocuments: IDocumentReceive[] = [];
  laboralDocuments: IDocumentReceive[] = [];

  showModal: boolean = false;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.getCategorizedDocuments();
  }

  getCategorizedDocuments(): void {
    // Supongamos que tienes un método en tu servicio que devuelve documentos por categorías.
    this.documentService.obtainDocumentsOfCategory('Personal').subscribe(
      (response) => {
        this.personalDocuments = response;
      },
      (error) => {
        console.error(error);
        alert('Error al obtener documentos de la categoría Personal');
      }
    );

    this.documentService.obtainDocumentsOfCategory('Académico').subscribe(
      (response) => {
        this.academicDocuments = response;
      },
      (error) => {
        console.error(error);
        alert('Error al obtener documentos de la categoría Académico');
      }
    );

    this.documentService.obtainDocumentsOfCategory('Laboral').subscribe(
      (response) => {
        this.laboralDocuments = response;
      },
      (error) => {
        console.error(error);
        alert('Error al obtener documentos de la categoría Laboral');
      }
    );
  }

  // Métodos para manejar el modal
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
