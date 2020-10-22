import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormInputErrorsComponent } from './components/form-input-errors/form-input-errors.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormFactory } from './services/form-factory/form-factory.service';
import { FormInputFactory } from './services/form-input-factory/form-input-factory.service';

@NgModule({
  declarations: [FormInputComponent, FormInputErrorsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [FormInputFactory, FormFactory],
  exports: [FormInputComponent, FormInputErrorsComponent]
})
export class NgxFormTrooperModule {}
