import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRatesComponent } from './admin-rates.component';

describe('AdminRatesComponent', () => {
  let component: AdminRatesComponent;
  let fixture: ComponentFixture<AdminRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
