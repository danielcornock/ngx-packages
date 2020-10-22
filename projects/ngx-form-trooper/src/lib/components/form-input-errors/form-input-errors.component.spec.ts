import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormInputErrorsComponent } from './form-input-errors.component';

describe('NgxFormInputErrorsComponent', () => {
  let component: NgxFormInputErrorsComponent;
  let fixture: ComponentFixture<NgxFormInputErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxFormInputErrorsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormInputErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
