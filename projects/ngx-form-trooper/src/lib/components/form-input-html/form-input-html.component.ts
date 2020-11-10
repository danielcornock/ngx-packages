import { Component, OnInit } from '@angular/core';

import { NgxFormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'ngx-form-input-html',
  templateUrl: './form-input-html.component.html',
  styleUrls: ['./form-input-html.component.scss']
})
export class FormInputHtmlComponent extends NgxFormInputComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
