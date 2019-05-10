import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterServicesComponent } from './water-services.component';

describe('WaterServicesComponent', () => {
  let component: WaterServicesComponent;
  let fixture: ComponentFixture<WaterServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
