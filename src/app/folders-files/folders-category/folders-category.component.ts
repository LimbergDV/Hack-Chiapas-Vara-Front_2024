import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folders-category',
  templateUrl: './folders-category.component.html',
  styleUrl: './folders-category.component.css'
})
export class FoldersCategoryComponent {
  @Input() folderTitle: string = '';
  @Input() id: number = 0;

  constructor(private router: Router) {}

  // Método para redirigir a la carpeta seleccionada
  onCardClick() {
    this.router.navigate([`/folders/${this.id}`]);  // Redirige a la ruta con el ID de la carpeta
  }
}


