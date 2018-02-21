import { Injectable } from '@angular/core';
import {ElectricityForm} from './electricityForm';

@Injectable()
export class ElectricityService {

private data: ElectricityForm;
private  k = 3;

getData(): ElectricityForm {
  return this.data;
}

calcData(elVal: number) {
 let calc: number;
 calc = elVal * this.k;
 return calc;
}


}
