import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatherModule } from 'angular-feather';
import { Check } from 'angular-feather/icons';

import { FormInputMultiSelectComponent } from './components';
import { FormInputCheckboxComponent } from './components/form-input-checkbox/form-input-checkbox.component';
import { NgxFormInputErrorsComponent } from './components/form-input-errors/form-input-errors.component';
import { FormInputPasswordComponent } from './components/form-input-password/form-input-password.component';
import { NgxFormInputComponent } from './components/form-input/form-input.component';
import { FormFactory } from './services/form-factory/form-factory.service';
import { FormInputFactory } from './services/form-input-factory/form-input-factory.service';

@NgModule({
  declarations: [
    NgxFormInputComponent,
    NgxFormInputErrorsComponent,
    FormInputMultiSelectComponent,
    FormInputPasswordComponent,
    FormInputCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FeatherModule.pick({ Check })
  ],
  providers: [FormInputFactory, FormFactory],
  exports: [
    NgxFormInputComponent,
    NgxFormInputErrorsComponent,
    FormInputPasswordComponent,
    FormInputMultiSelectComponent,
    FormInputCheckboxComponent
  ]
})
export class NgxFormTrooperModule {}
