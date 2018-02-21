import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { ElecticityComponent } from './electicity/electicity.component';
import { WaterComponent } from './water/water.component';
import {ElectricityForm} from './electicity/electricityForm';
import {ElectricityService} from './electicity/electricity.service';



@NgModule({
  declarations: [ AppComponent, AboutAuthorComponent, ElecticityComponent, WaterComponent ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ElectricityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
