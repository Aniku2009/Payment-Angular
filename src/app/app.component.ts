import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

myForm: FormGroup;
constructor(){
  this.myForm = new FormGroup({
    'timerange' : new FormControl('2018-01',  [Validators.required, this.userNameValidator])
  });
}
userNameValidator(control: FormControl): {[s: string]: boolean} {
  console.log(control.value);
  if(control.value==='2017-03'){
    return {'timerange': true};
  }
  return null;
}

  submit(){
    console.log(this.myForm);
  }
}
