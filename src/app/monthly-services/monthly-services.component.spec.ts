import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyServicesComponent } from './monthly-services.component';

describe('MonthlyServicesComponent', () => {
  let component: MonthlyServicesComponent;
  let fixture: ComponentFixture<MonthlyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
