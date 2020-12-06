import { ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

import { FormInputType } from '../constants/form-input-type.constant';
import { IFormInputValidationConfig } from './form-input-validation-config.interface';
import { ILabelValuePair } from './key-value.interface';

export type IFormInputFactoryConfig =
  | IFormInputFactoryFieldConfig
  | IFormInputFactoryGroupConfig;

export interface IFormInputFactoryFieldConfig {
  name: string;
  label: string;
  type?: FormInputType;
  placeholder?: string;
  defaultValue?: any;
  disabled?: boolean;
  validators?: IFormInputValidationConfig | ValidatorFn[];
  tooltip?: string;
  options?: Array<ILabelValuePair>;
  hidden?(): Observable<boolean>;
  setValue?(arg: any): void | Promise<void>;
}
export interface IFormInputFactoryGroupConfig {
  name: string;
  label: string;
  fields: Array<IFormInputFactoryConfig>;
}
