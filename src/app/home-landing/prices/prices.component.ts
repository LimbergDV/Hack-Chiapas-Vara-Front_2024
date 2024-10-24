import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent {

  @Input ()planType: string= "";
  @Input ()price: number= 0;
  @Input ()time: string= "";
  @Input ()info1: string= "";
  @Input ()storage: string= "";
  @Input ()info2: string= "";
  @Input ()infoPremium1: string= "";
  @Input ()infoPremium2: string= "";
  @Input ()infoPremium3: string= "";
  @Input ()infoPremium4: string= "";
}
