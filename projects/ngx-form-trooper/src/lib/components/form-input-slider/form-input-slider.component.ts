import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

import { NgxFormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'ngx-form-input-slider',
  templateUrl: './form-input-slider.component.html',
  styleUrls: ['./form-input-slider.component.scss']
})
export class FormInputSliderComponent extends NgxFormInputComponent
  implements OnInit, AfterViewInit {
  public valuePercentage: Observable<string>;

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.valuePercentage = this.control.valueChanges.pipe(
      startWith(this.control.value),
      switchMap((val) => {
        const fromStart = val - this.formInputField.customConfig.min;
        const range =
          this.formInputField.customConfig.max -
          this.formInputField.customConfig.min;

        return of(`${(fromStart / range) * 100}%`);
      })
    );
  }
}
