import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  @Input() isDrawerOpen = false;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }
  
}
