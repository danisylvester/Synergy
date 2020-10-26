import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoServeComponent } from './who-serve.component';

describe('WhoServeComponent', () => {
  let component: WhoServeComponent;
  let fixture: ComponentFixture<WhoServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoServeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
