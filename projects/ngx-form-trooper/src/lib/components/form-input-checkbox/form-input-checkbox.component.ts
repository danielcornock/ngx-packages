import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NgxFormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'ngx-form-input-checkbox',
  templateUrl: './form-input-checkbox.component.html',
  styleUrls: ['./form-input-checkbox.component.scss']
})
export class FormInputCheckboxComponent extends NgxFormInputComponent
  implements OnInit {
  @Output()
  public formInputCheckboxChange: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.formInputField.control.valueChanges.subscribe((val) =>
      this.formInputCheckboxChange.emit(val)
    );
  }
}
