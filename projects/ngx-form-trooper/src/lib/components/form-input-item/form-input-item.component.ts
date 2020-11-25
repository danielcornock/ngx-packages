import { Component, Input, OnInit } from '@angular/core';

import { FormInputType } from '../../constants';
import { FormInputField } from '../../instances';

@Component({
  selector: 'ngx-form-input-item',
  templateUrl: './form-input-item.component.html',
  styleUrls: ['./form-input-item.component.scss']
})
export class FormInputItemComponent implements OnInit {
  @Input()
  public formInputField: FormInputField;

  public type: string;

  public formInputType = FormInputType;

  ngOnInit(): void {
    this.type = this.formInputField.type;
  }
}
