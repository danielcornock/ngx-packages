import { FormControl } from '@angular/forms';

import { FormInputType } from '../../constants/form-input-type.constant';
import { IFormInputFieldConfig } from '../../interfaces/form-input-field-config.interface';
import { ILabelValuePair } from '../../interfaces/key-value.interface';

export class FormInputField {
  public name: string;
  public label: string;
  public control: FormControl;
  public placeholder?: string;
  public type: FormInputType;
  public tooltip?: string;
  public options?: Array<ILabelValuePair>;

  constructor(config: IFormInputFieldConfig) {
    this.name = config.name;
    this.label = config.label;
    this.control = config.control;
    this.placeholder = config.placeholder;
    this.type = config.type || FormInputType.TEXT;
    this.tooltip = config.tooltip;
    this.options = config.options;
  }

  public get isInvalid(): boolean {
    return this.control.invalid;
  }
}
