import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisenessRatesComponent } from './buiseness-rates.component';

describe('BuisenessRatesComponent', () => {
  let component: BuisenessRatesComponent;
  let fixture: ComponentFixture<BuisenessRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuisenessRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisenessRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
