import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatherModule } from 'angular-feather';
import { Check } from 'angular-feather/icons';
import { QuillModule } from 'ngx-quill';

import { FormInputMultiSelectComponent } from './components';
import { FormInputCheckboxComponent } from './components/form-input-checkbox/form-input-checkbox.component';
import { NgxFormInputErrorsComponent } from './components/form-input-errors/form-input-errors.component';
import { FormInputHtmlComponent } from './components/form-input-html/form-input-html.component';
import { FormInputNumberComponent } from './components/form-input-number/form-input-number.component';
import { FormInputPasswordComponent } from './components/form-input-password/form-input-password.component';
import { FormInputRadioSetComponent } from './components/form-input-radio-set/form-input-radio-set.component';
import { FormInputSelectComponent } from './components/form-input-select/form-input-select.component';
import { FormInputTextareaComponent } from './components/form-input-textarea/form-input-textarea.component';
import { NgxFormInputComponent } from './components/form-input/form-input.component';
import { FormFactory } from './services/form-factory/form-factory.service';
import { FormInputFactory } from './services/form-input-factory/form-input-factory.service';

@NgModule({
  declarations: [
    NgxFormInputComponent,
    NgxFormInputErrorsComponent,
    FormInputMultiSelectComponent,
    FormInputPasswordComponent,
    FormInputCheckboxComponent,
    FormInputHtmlComponent,
    FormInputSelectComponent,
    FormInputRadioSetComponent,
    FormInputNumberComponent,
    FormInputTextareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FeatherModule.pick({ Check }),
    QuillModule.forRoot()
  ],
  providers: [FormInputFactory, FormFactory],
  exports: [
    NgxFormInputComponent,
    NgxFormInputErrorsComponent,
    FormInputPasswordComponent,
    FormInputMultiSelectComponent,
    FormInputCheckboxComponent,
    FormInputHtmlComponent,
    FormInputSelectComponent,
    FormInputRadioSetComponent,
    FormInputNumberComponent,
    FormInputTextareaComponent
  ]
})
export class NgxFormTrooperModule {}
