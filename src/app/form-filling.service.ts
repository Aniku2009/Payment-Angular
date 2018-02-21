import { Injectable } from '@angular/core';
import {FormFilling} from './FormFilling';

@Injectable()
export class FormFillingService {
  private data: FormFilling[] = [];

  submitForm( date: string, typeOfPayment: string,  subsidy: boolean) {
    this.data.push(new FormFilling(date, typeOfPayment, subsidy));
  }

}
