import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantAmountComponent } from './enfant-amount.component';

describe('EnfantAmountComponent', () => {
  let component: EnfantAmountComponent;
  let fixture: ComponentFixture<EnfantAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfantAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
