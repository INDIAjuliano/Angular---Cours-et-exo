import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-amount',
  templateUrl: './parent-amount.component.html',
  styleUrls: ['./parent-amount.component.css']
})
export class ParentAmountComponent {
 public amountTotal: number = 100;
}
