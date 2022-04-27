import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForoModel } from 'src/app/models/foro.models';
import { Respons } from '../models/clientes-response';
import {map, delay}  from 'rxjs/operators'
import { Borrar, UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
private url=''
  
  

  constructor( private http:HttpClient) {
    console.log("servicio cliente");
    
   }
   getAll():Observable<any>{
    
    return this.http.get<any>('/soporte/ObtenerClientes')
    
    

  }
  

  mostrarClientesMonto():Observable<any>{
    return this.http.get<any>('/usuario/ObtenerUsuarios')
  }

  //crear

  crearComentario(oCliente:Respons){
    return this.http.post('/soporte/guardarcliente',oCliente)
                .pipe(
                  map ((resp:any)=>{
                    oCliente.idCliente=resp.name;
                    return oCliente;

                  })
                );

  }

  //enviar dinero
  enviarDinero(oCliente:UsuarioModel){
    return this.http.post('/cuenta/guardardinero',oCliente)
              .pipe(
                map((resp:any)=>{
                  oCliente.saldo=resp;
                })
              )

  }

  //  getCliente(){
  //   const url ='https://localhost:4200/cliente/ObtenerClientes';
  //   return this.http.get(url)

     
    
  // }

                    //Actualizar comentario
  actualizarClientes(foro:Respons){
    return this.http.put(`${this.url}/cliente/ModificarCliente/${foro.idCliente}`,foro);

  }

  borrarUsuario(id_Usuario:number ){
    console.log("ID",id_Usuario);
    return this.http.delete(`${this.url}/usuario/EliminarUsuario`) 
    
  }

  getUsuarioId (id:any){
    return this.http.get (`${this.url}/usuario/ObtenerUsuarios/${id}`);
  }

        
}
