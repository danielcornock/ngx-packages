import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormInputComponent } from './form-input.component';

describe('NgxFormInputComponent', () => {
  let component: NgxFormInputComponent;
  let fixture: ComponentFixture<NgxFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxFormInputComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
