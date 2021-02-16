import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NgxFormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'ngx-form-input-color',
  templateUrl: './form-input-color.component.html',
  styleUrls: ['./form-input-color.component.scss']
})
export class FormInputColorComponent extends NgxFormInputComponent
  implements OnInit {
  public textControl: FormControl;

  ngOnInit(): void {
    super.ngOnInit();
    this.textControl = new FormControl(
      this.formInputField.control.value,
      this._validateHexString
    );
  }

  public get isErrored(): boolean {
    return this.textControl.touched && this.textControl.invalid;
  }

  public setTextValue(event): void {
    this.textControl.setValue(event.target.value);
  }

  public setColorValue(event): void {
    this.control.setValue(event.target.value);
  }

  private _validateHexString(
    control: FormControl
  ): { [key: string]: any } | null {
    const regex = new RegExp(/^#[0-9a-f]{6}/i);
    if (regex.test(control.value) && control.value.length === 7) {
      return null;
    } else {
      return { hex: true };
    }
  }
}
