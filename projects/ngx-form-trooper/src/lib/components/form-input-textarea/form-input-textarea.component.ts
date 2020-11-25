import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { NgxFormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'ngx-form-input-textarea',
  templateUrl: './form-input-textarea.component.html',
  styleUrls: ['./form-input-textarea.component.scss']
})
export class FormInputTextareaComponent extends NgxFormInputComponent
  implements OnInit, AfterViewInit {
  @ViewChild('textarea')
  public textarea;

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.setHeight();
  }

  public setHeight(): void {
    const elementStyle = this.textarea.nativeElement.style;
    const scrollHeight = this.textarea.nativeElement.scrollHeight;

    elementStyle.height = 'auto';
    elementStyle.height = scrollHeight + 'px';
  }
}
