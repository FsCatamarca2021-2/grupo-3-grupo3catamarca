import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
private url=''


  constructor(private http:HttpClient) { }
  logout(){

  }
  


  login (usuario:UsuarioModel){
    const authData ={
      //id:usuario.id_Usuario,
     nombre:usuario.nombre,
      email:usuario.email,
      password:usuario.password,
      };
      return this.http.post(`${this.url}/usuario/login/`,authData);


  };
 



  nuevoUsuario (usuario:UsuarioModel){
   const authData ={
     email:usuario.email,
     nombre:usuario.nombre,
     password:usuario.password,
    //  apellido:usuario.apellido,
    //  dni:usuario.dni,
    //  nacimiento:usuario.nacimiento,
    //  celular:usuario.celular,
    //  direccion:usuario.direccion,
    //  numeracion:usuario.numeracion,
    //  departamento:usuario.departamento,
    //  piso:usuario.piso,
    //  barrio:usuario.barrio,
    //  edad:usuario.edad,
    //  provincia:usuario.provincia,
    //  genero:usuario.genero,


   
    
   };
  return this.http.post(`${this.url}/usuario/GuardarUsuario`,authData);
  };


 
  getUsuario():Observable<any>{
    
    return this.http.get(`${this.url}/usuario/ObtenerUsuarios`);
              
  }

  // private crearArreglo (usuadioObj:object){

  //   const uaurio: UsuarioModel[]=[];
  //   console.log(usuadioObj);
  //   if (usuadioObj==null)
  //   return 'hola';
  // }

  // borrarUsuario(id:any ){
  //   console.log("ID",id);
  //   return this.http.delete('/usuario/EliminarUsuario',id)
    
  // }

   //Actualizar Usuario
  usuarioActualizar(usuario:UsuarioModel){
    return this.http.put(`${this.url}/usuario/modificarcliente/`,usuario)

  }
       

}
