import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsServicesComponent } from './clients-services.component';

describe('ClientsServicesComponent', () => {
  let component: ClientsServicesComponent;
  let fixture: ComponentFixture<ClientsServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
