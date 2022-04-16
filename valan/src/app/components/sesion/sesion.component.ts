import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  formLog = this.nombreform.group ({
    input1: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern('[0-9]{7,8}')]],
    input2: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$'),Validators.maxLength(16)]]
  })



get input1(){return this.formLog.get('input1')}
get input2(){return this.formLog.get('input2')}

  constructor(private nombreform:FormBuilder) { }

  ngOnInit(): void {
  }

}
