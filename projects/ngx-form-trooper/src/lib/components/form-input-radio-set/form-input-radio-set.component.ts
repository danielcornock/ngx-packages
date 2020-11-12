import { Component, OnInit } from '@angular/core';

import { NgxFormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'ngx-form-input-radio-set',
  templateUrl: './form-input-radio-set.component.html',
  styleUrls: ['./form-input-radio-set.component.scss']
})
export class FormInputRadioSetComponent extends NgxFormInputComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
