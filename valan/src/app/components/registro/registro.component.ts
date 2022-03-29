import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {

  form = this.formB.group({
    nombre: ['', [Validators.required, Validators.pattern('/^[1-9]\d{6,10}$/')]],
    apellido: ['', [Validators.required, Validators.pattern('/^[1-9]\d{6,10}$/')]],
    dni: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    celular: ['', Validators.required],
    direccion: ['', Validators.required],
    numeracion: ['', Validators.required],
    barrio:['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    contraseña: ['', [Validators.required, Validators.minLength(8)]],
    edad:['',[Validators.required,Validators.min(18), Validators.max(99)]],
    provincia: ['', Validators.required],
    genero: ['', Validators.required],
    departamento:[''],
    piso:[''],
  })



  constructor(private formB: FormBuilder) {
  }

  ngOnInit(): void {}
  
  onSubmit(){
    console.warn(this.form.value);
    this.form.reset()
  }

  get nombre() {return this.form.get('nombre');}
  get apellido() {return this.form.get('apellido');}
  get dni() {return this.form.get('dni');}
  get fechaNacimiento() {return this.form.get('fechaNacimiento');}
  get celular() {return this.form.get('calular');}
  get direccion() {return this.form.get('direccion');}
  get numeracion() {return this.form.get('numeracion');}
  get barrio() {return this.form.get('barrio');}
  get correo() {return this.form.get('correo');}
  get contraseña() {return this.form.get('contraseña');}
  get edad() {return this.form.get('edad');}
  get provincia() {return this.form.get('provincia');}
  get genero() {return this.form.get('genero');}

  
}

