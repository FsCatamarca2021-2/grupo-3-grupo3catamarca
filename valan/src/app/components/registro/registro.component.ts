import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {

  form = this.formB.group({
    nombre: ['', [Validators.required, Validators.maxLength(20),Validators.pattern('[a-zA-ZÀ-ÿ ]{2,20}')]],
    apellido: ['', [Validators.required, Validators.pattern('[a-zA-ZÀ-ÿ ]{2,20}')]],
    dni: ['', [Validators.required, Validators.pattern('[0-9]{6,8}'),Validators.maxLength(8)]],
    fechaNacimiento: ['', Validators.required],
    celular: ['', [Validators.required, Validators.pattern('[0-9]{9,12}')]],
    direccion: ['', Validators.required],
    numeracion: ['', Validators.required],
    barrio:['', Validators.required],
    correo: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$')]],
    contraseña: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$'),Validators.maxLength(16)]],
    contraseña2: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$'),Validators.maxLength(16)]],
    provincia: ['', Validators.required],
    genero: ['', Validators.required],
   // departamento:[''],
   // piso:[''],
  })


  constructor(private formB: FormBuilder) {
  }

  ngOnInit(): void {}
  
  RegistroNuevo(){
    
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
  get contraseña2() {return this.form.get('contraseña');}
  get provincia() {return this.form.get('provincia');}
  get genero() {return this.form.get('genero');}

  hide = true;
}

