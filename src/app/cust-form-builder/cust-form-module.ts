import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustFormComponent } from './cust-form/cust-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CustFormService } from './cust-form.service';


@NgModule({
  declarations: [CustFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [CustFormComponent],
  providers: [CustFormService]
})
export class CustFormBuilderModule { }
