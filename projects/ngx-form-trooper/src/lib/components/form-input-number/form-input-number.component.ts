import { Component, OnInit } from '@angular/core';

import { NgxFormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'ngx-form-input-number',
  templateUrl: './form-input-number.component.html',
  styleUrls: ['./form-input-number.component.scss']
})
export class FormInputNumberComponent extends NgxFormInputComponent
  implements OnInit {
  ngOnInit(): void {
    super.ngOnInit();
  }
}
