import { FormControl } from '@angular/forms';

import { FormInputType } from '../constants/form-input-type.constant';

export interface IFormInputFieldConfig {
  name: string;
  label: string;
  type?: FormInputType;
  control: FormControl;
  placeholder?: string;
  tooltip?: string;
}
