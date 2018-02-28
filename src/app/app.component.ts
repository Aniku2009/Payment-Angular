import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormFilling} from './FormFilling';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  myForm: FormGroup=new FormGroup();
'timerange': new FormControl ()

  formfilling: FormFilling;

  ngOnInit() {
    this.http.get('lust_update.json').subscribe((data: FormFilling) => this.formfilling = data);
  }

  userNameValidator(control: FormControl): { [s: string]: boolean } {
    console.log(control.value);
    if (control.value === '2017-03') {
      return {'timerange': true};
    }
    return null;
  }

  submit() {
    console.log(this.myForm);
  }
}
