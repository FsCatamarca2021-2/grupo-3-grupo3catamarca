import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
private url=''


  constructor(private http:HttpClient) { }
  logout(){

  }



  login (oUsuario:UsuarioModel){
    const authData ={
      email:oUsuario.email,
      password:oUsuario.password,
      };
      return this.http.post('/usuario/login',authData);


  };



  nuevoUsuario (usuario:UsuarioModel){
   const authData ={
   email:usuario.email,
   password:usuario.password,
   nombre:usuario.nombre,
   };
  return this.http.post(`${this.url}/usuario/GuardarUsuario`,authData);
  };


  // estaAutenticado():boolean{
  //   return  this.nuevoUsuario >2;

  // }
}
