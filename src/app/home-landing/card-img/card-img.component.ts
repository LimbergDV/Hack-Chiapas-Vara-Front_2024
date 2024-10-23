import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrl: './card-img.component.css'
})
export class CardImgComponent {

  @Input ()imgUrl: string= "";
  @Input ()titleCover: string="";
  @Input ()textCover: string="";
  @Input() isLeft: boolean = true;

}
