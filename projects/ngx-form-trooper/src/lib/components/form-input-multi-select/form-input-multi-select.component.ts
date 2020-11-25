import { Component, OnInit } from '@angular/core';

import { NgxFormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'ngx-form-input-multi-select',
  templateUrl: './form-input-multi-select.component.html',
  styleUrls: ['./form-input-multi-select.component.scss']
})
export class FormInputMultiSelectComponent extends NgxFormInputComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
