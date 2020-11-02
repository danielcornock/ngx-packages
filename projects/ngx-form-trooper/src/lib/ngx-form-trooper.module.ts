import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormInputMultiSelectComponent } from './components';
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
    FormInputPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [FormInputFactory, FormFactory],
  exports: [
    NgxFormInputComponent,
    NgxFormInputErrorsComponent,
    FormInputPasswordComponent,
    FormInputMultiSelectComponent
  ]
})
export class NgxFormTrooperModule {}
