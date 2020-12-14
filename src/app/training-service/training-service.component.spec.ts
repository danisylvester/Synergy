import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingServiceComponent } from './training-service.component';

describe('TrainingServiceComponent', () => {
  let component: TrainingServiceComponent;
  let fixture: ComponentFixture<TrainingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
