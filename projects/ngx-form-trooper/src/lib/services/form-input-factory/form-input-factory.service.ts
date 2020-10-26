import { Injectable } from '@angular/core';
import { FormBuilder, ValidatorFn, Validators } from '@angular/forms';

import { FormInputField } from '../../instances/form-input-field/form-input-field';
import { FormInputGroup } from '../../instances/form-input-group/form-input-group';
import { IFormInputFactoryConfig, IFormInputFactoryGroupConfig } from '../../interfaces/form-input-factory-config.interface';
import { IFormInputValidationConfig } from '../../interfaces/form-input-validation-config.interface';

@Injectable({
  providedIn: 'root'
})
export class FormInputFactory {
  constructor(private readonly _formBuilder: FormBuilder) {}

  public create(
    config: IFormInputFactoryConfig
  ): FormInputField | FormInputGroup {
    if ('fields' in config) {
      return this._createFormGroup(config);
    } else {
      return new FormInputField({
        ...config,
        control: this._formBuilder.control(
          config.defaultValue,
          this._buildValidation(config.validators)
        )
      });
    }
  }

  private _createFormGroup(
    config: IFormInputFactoryGroupConfig
  ): FormInputGroup {
    const formGroupConfig = {};
    const fields: Array<FormInputField> = [];

    config.fields.forEach((field) => {
      const createdField = this.create(field) as FormInputField;
      fields.push(createdField);
      formGroupConfig[field.name] = createdField.control;
    });

    return new FormInputGroup({
      name: config.name,
      label: config.label,
      fields,
      control: this._formBuilder.group(formGroupConfig)
    });
  }

  private _buildValidation(
    config?: IFormInputValidationConfig | Array<ValidatorFn>
  ): Array<ValidatorFn> {
    if (Array.isArray(config)) {
      return config;
    }

    const validators = [];

    if (!config) {
      return validators;
    }

    if (config.required) {
      validators.push(Validators.required);
    }

    if (config.email) {
      validators.push(Validators.email);
    }

    return validators;
  }
}
