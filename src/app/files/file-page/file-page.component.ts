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

  constructor(private _service: FileService) {}

  onFileSelected(event: any): void {
    if(event.target.files[0] !== undefined){
      this.file = event.target.files[0]
    }
  }

  sendFile(): void {
    this._service.sendDocument(this.file).subscribe(
      (response) => {
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error) => {
        Swal.fire({
          title: 'Error',
          text: 'A problem ocurred on the serve',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    )
  }

}
