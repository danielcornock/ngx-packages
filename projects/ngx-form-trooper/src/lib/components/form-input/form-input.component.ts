import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { FormInputField } from '../../instances';

@Component({
  selector: 'ngx-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class NgxFormInputComponent implements OnInit {
  @Input()
  public formInputField: FormInputField;

  public control: FormControl;
  public isRequired: boolean;
  public isHidden$: Observable<boolean>;

  constructor() {}

  ngOnInit(): void {
    this.control = this.formInputField.control;
    this.isRequired = this._getRequiredStatus();
    this.isHidden$ = this.formInputField.hidden
      ? this.formInputField.hidden()
      : of(false);
  }

  public get isErrored(): boolean {
    return this.control.touched && this.control.invalid;
  }

  private _getRequiredStatus(): boolean {
    if (this.control.validator) {
      const validator = this.control.validator({} as FormControl);
      if (validator && validator.required) {
        return true;
      }
    }
  }
}
