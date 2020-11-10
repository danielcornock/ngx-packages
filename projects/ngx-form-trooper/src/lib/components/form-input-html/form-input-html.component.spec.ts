import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputHtmlComponent } from './form-input-html.component';

describe('FormInputHtmlComponent', () => {
  let component: FormInputHtmlComponent;
  let fixture: ComponentFixture<FormInputHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
