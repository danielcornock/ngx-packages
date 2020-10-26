import { FormGroup } from '@angular/forms';

import { FormInputField } from '../form-input-field/form-input-field';

export class FormInputGroup {
  name: string;
  label: string;
  fields: Array<FormInputField>;
  control: FormGroup;

  constructor(config: FormInputGroup) {
    this.name = config.name;
    this.label = config.label;
    this.fields = config.fields;
    this.control = config.control;
  }
}
