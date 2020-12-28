import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { FormInputType } from '../constants/form-input-type.constant';
import { ILabelValuePair } from './key-value.interface';

export interface IFormInputFieldConfig {
  name: string;
  label: string;
  type?: FormInputType;
  control: FormControl;
  placeholder?: string;
  tooltip?: string;
  options?: Array<ILabelValuePair>;
  customConfig?: any;
  hidden?(): Observable<boolean>;
  setValue?(arg: any): void | Promise<void>;
}
