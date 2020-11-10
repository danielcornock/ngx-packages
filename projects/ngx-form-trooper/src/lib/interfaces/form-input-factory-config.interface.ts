import { ValidatorFn } from '@angular/forms';

import { FormInputType } from '../constants/form-input-type.constant';
import { IFormInputValidationConfig } from './form-input-validation-config.interface';

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
}
export interface IFormInputFactoryGroupConfig {
  name: string;
  label: string;
  fields: Array<IFormInputFactoryConfig>;
}
