import { Component, OnInit } from '@angular/core';

import { NgxFormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'ngx-form-input-select',
  templateUrl: './form-input-select.component.html',
  styleUrls: ['./form-input-select.component.scss']
})
export class FormInputSelectComponent extends NgxFormInputComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
