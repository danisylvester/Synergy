import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleServicesComponent } from './single-services.component';

describe('SingleServicesComponent', () => {
  let component: SingleServicesComponent;
  let fixture: ComponentFixture<SingleServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
