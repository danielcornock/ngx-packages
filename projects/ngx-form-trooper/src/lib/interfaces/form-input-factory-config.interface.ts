import { ValidatorFn } from '@angular/forms';

import { IFormInputValidationConfig } from './form-input-validation-config.interface';

export type IFormInputFactoryConfig =
  | IFormInputFactoryFieldConfig
  | IFormInputFactoryGroupConfig;

export interface IFormInputFactoryFieldConfig {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  defaultValue?: any;
  validators?: IFormInputValidationConfig | ValidatorFn[];
}
export interface IFormInputFactoryGroupConfig {
  name: string;
  label: string;
  fields: Array<IFormInputFactoryConfig>;
}
