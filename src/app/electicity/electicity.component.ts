import {Component, OnInit, ViewChild} from '@angular/core';
import {ElectricityForm} from './electricityForm';
import {ElectricityService} from './electricity.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-electicity',
  templateUrl: './electicity.component.html',
  styleUrls: ['./electicity.component.css']
})

export class ElecticityComponent implements OnInit {

// @ViewChild('i') input;
//
// get data() {
//   console.log('jkj');
//   return (this.input.value) ? this.input.value * 10 : 0;
// }

  constructor(public electricityService: ElectricityService) { }
  item: ElectricityForm;
  elValFROMHtml: number;
  elValForHtml: number;
  elVal: ElectricityService = new ElectricityService();

  calcFromHtml($event): void {
    this.elValForHtml = this.elVal.calcData(this.elValFROMHtml);
  }

  ngOnInit() {
  this.item = this.electricityService.getData();
  }

}
