import { FormGroup } from '@angular/forms';

import { FormInputField } from '../form-input-field/form-input-field';
import { FormInputGroup } from '../form-input-group/form-input-group';

export class FormContainer {
  constructor(
    inputs: Array<FormInputField | FormInputGroup>,
    formGroup: FormGroup
  ) {
    this.fields = inputs;
    this.formGroup = formGroup;
  }

  public formGroup: FormGroup;
  public errors: any;
  public fields: Array<FormInputField | FormInputGroup>;

  public get value(): any {
    return this.formGroup.value;
  }

  public getField(fieldName: string): FormInputField {
    return this.fields.find(
      (field) => field.name === fieldName
    ) as FormInputField;
  }

  public get isInvalid(): boolean {
    return this.formGroup.invalid;
  }
}
