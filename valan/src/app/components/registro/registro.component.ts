import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {

  form = this.formB.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    dni: ['', Validators.required],
    direccion: ['', Validators.required],
    numeracion: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    contraseña: ['', [Validators.required, Validators.minLength(8)]],
    edad:['',[Validators.required,Validators.min(18), Validators.max(99)]],
    provincia: ['', Validators.required],
    genero: ['', Validators.required],
  })



  constructor(private formB: FormBuilder) {
  }

  ngOnInit(): void {}
  

  onSubmit(){
    console.warn(this.form.value);
  }
}
