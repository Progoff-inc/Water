import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRatesComponent } from './client-rates.component';

describe('ClientRatesComponent', () => {
  let component: ClientRatesComponent;
  let fixture: ComponentFixture<ClientRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
