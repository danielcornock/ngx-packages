import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'ngx-form-input-errors',
  templateUrl: './form-input-errors.component.html',
  styleUrls: ['./form-input-errors.component.scss']
})
export class NgxFormInputErrorsComponent implements OnChanges {
  @Input()
  public errors: ValidationErrors;

  public errorText: string;

  constructor() {}

  public ngOnChanges(): void {
    this._getErrors();
  }

  private _getErrors(): void {
    if (this.errors.required) {
      this.errorText = 'This field is required';
    } else if (this.errors.email) {
      this.errorText = 'This is not a valid email address';
    } else if (this.errors.max) {
      this.errorText = `Value cannot be larger than ${this.errors.max.max}`;
    } else if (this.errors.min) {
      this.errorText = `Value cannot be smaller than ${this.errors.min.min}`;
    } else if (this.errors.minlength) {
      this.errorText = `Minimum length for this field is ${this.errors.minlength.requiredLength}`;
    } else if (this.errors.maxlength) {
      this.errorText = `Maximum length for this field is ${this.errors.maxlength.requiredLength}`;
    } else if (this.errors.hex) {
      this.errorText = 'This is not a valid hex colour';
    } else {
      this.errorText = undefined;
    }
  }
}
