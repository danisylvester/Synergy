import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavColoredComponent } from './nav-colored.component';

describe('NavColoredComponent', () => {
  let component: NavColoredComponent;
  let fixture: ComponentFixture<NavColoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavColoredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
