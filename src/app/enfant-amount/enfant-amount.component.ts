import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enfant-amount',
  templateUrl: './enfant-amount.component.html',
  styleUrls: ['./enfant-amount.component.css']
})
export class EnfantAmountComponent {

    afficherListe = false;
    toggleListe() {
      this.afficherListe = !this.afficherListe;
    }
  @Input()
  public amount: number= 0 ;
}
