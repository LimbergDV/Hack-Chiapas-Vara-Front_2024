import { Component, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { DocumentService } from '../../services/document.service';


@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css',
})
export class AddComponent {

//MODALAS
  @Output() closeModal= new EventEmitter<void>();

  onClose(){
    this.closeModal.emit();
  }

  file: File | undefined;
  idCategoria: number | undefined;

  constructor(private _service: DocumentService) {}

  onFileSelected(event: any): void {
    if (event.target.files[0] !== undefined) {
      this.file = event.target.files[0];
    }
  }

  onCategorySelected(event: any): void {
    this.idCategoria = +event.target.value;
  }

  sendFile(): void {
    if (!this.file || !this.idCategoria) {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, selecciona un archivo y una categoría.',
      });
      return;
    }

    this._service.sendDocument(this.file, this.idCategoria).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Tu archivo ha sido subido exitosamente',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un problema en el servidor',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    );
  }
}
