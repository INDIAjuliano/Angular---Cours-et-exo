import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'bootstrap';
import { AppComponent } from './app.component';
import { ParentAmountComponent } from './parent-amount/parent-amount.component';
import { EnfantAmountComponent } from './enfant-amount/enfant-amount.component';
import { CommpCompComponent } from './commp-comp/commp-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentAmountComponent,
    EnfantAmountComponent,
    CommpCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
