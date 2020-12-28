import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

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
  public customConfig: any;
  public hidden?: () => Observable<boolean>;

  constructor(config: IFormInputFieldConfig) {
    this.name = config.name;
    this.label = config.label;
    this.control = config.control;
    this.placeholder = config.placeholder;
    this.type = config.type || FormInputType.TEXT;
    this.tooltip = config.tooltip;
    this.options = config.options;
    this.hidden = config.hidden;
    this.customConfig = config.customConfig;

    if (config.setValue) {
      config.control.valueChanges.subscribe(config.setValue);
    }
  }

  public get isInvalid(): boolean {
    return this.control.invalid;
  }

  /* TODO: Change any - ValidatorFn type wasn't working */
  public setValidators(validator: any): void {
    this.control.setValidators(validator);
    this.control.updateValueAndValidity();
  }

  public disable(): void {
    this.control.disable();
  }

  public enable(): void {
    this.control.enable();
  }

  public get value(): any {
    return this.control.value;
  }

  public get value$(): Observable<any> {
    return this.control.valueChanges.pipe(startWith(this.value));
  }
}
