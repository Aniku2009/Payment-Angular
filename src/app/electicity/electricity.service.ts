import { Injectable } from '@angular/core';
import {ElectricityForm} from './electricityForm';
import {LogService} from './log.service';

@Injectable()
export class ElectricityService {

private data: ElectricityForm;

private logService: LogService

getData(): ElectricityForm {
  // this.logService.write('Get data has started')
  return this.data;
}

calcData(elVal: number, price: number) {
 let calc: number;
 calc = elVal * price;
  // this.logService.write('Start to calculate data')
 return calc;
}


}
