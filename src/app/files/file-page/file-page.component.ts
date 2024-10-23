import { Component } from '@angular/core';
import { FileService } from '../services/file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrl: './file-page.component.css',
})
export class FilePageComponent {
  file: File | undefined;
  idCategoria: number | undefined; // Cambiado a undefined para permitir la verificación

  constructor(private _service: FileService) {}

  onFileSelected(event: any): void {
    if (event.target.files[0] !== undefined) {
      this.file = event.target.files[0];
    }
  }

  // Captura el evento de selección de categoría
  onCategorySelected(event: any): void {
    this.idCategoria = +event.target.value; // Convertir a número
  }

  sendFile(): void {
    console.log(this.file, this.idCategoria); // Para depuración

    // Asegúrate de que se seleccionó un archivo y una categoría
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
