import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputColorComponent } from './form-input-color.component';

describe('FormInputColorComponent', () => {
  let component: FormInputColorComponent;
  let fixture: ComponentFixture<FormInputColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
