import { Component, OnInit } from '@angular/core';

import { NgxFormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'ngx-form-input-password',
  templateUrl: './form-input-password.component.html',
  styleUrls: ['./form-input-password.component.scss']
})
export class FormInputPasswordComponent extends NgxFormInputComponent
  implements OnInit {
  public showPassword: boolean;
  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public changePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
