import { FormInputField } from '../instances';
import { IFormInputFactoryConfig } from './form-input-factory-config.interface';

export type IFormFactoryConfig = Array<
  IFormInputFactoryConfig | FormInputField
>;
