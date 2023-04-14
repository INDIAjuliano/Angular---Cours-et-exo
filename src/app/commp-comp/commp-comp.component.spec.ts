import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommpCompComponent } from './commp-comp.component';

describe('CommpCompComponent', () => {
  let component: CommpCompComponent;
  let fixture: ComponentFixture<CommpCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommpCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
