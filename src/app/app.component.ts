import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
 
  public details:Array<any> = [
    {name:'ravi',email:'ravi@gmail.com',amount:200},
    {name:'kamal',email:'kamal@gmail.com',amount:200},
    {name:'vimal',email:'vimal@gmail.com',amount:200}
  ];

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    amount: new FormControl('',[Validators.required]),
  })

  get f():{[key: string]: AbstractControl}{
    return this.form.controls;
  }
  onSubmitform(){
if (this.form.invalid) return;
console.log(this.form.value)
  }
}
