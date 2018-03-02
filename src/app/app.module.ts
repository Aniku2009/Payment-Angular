import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AboutAuthorComponent} from './about-author/about-author.component';
import {ElecticityComponent} from './electicity/electicity.component';
import {WaterComponent} from './water/water.component';
import {ElectricityForm} from './electicity/electricityForm';
import {ElectricityService} from './electicity/electricity.service';
import {LogService} from './electicity/log.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'w', component: WaterComponent},
  { path: 'e', component: ElecticityComponent}
  ];

@NgModule({
  declarations: [ AppComponent, AboutAuthorComponent, ElecticityComponent, WaterComponent ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [ElectricityService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
