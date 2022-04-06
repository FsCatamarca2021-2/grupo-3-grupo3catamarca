import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForoModel } from 'src/app/models/foro.models';
import { Respons } from '../models/clientes-response';
import {map}  from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
private url='http://localhost:5086'
  
  

  constructor( private http:HttpClient) {
    console.log("servicio cliente");
    
   }
   getAll():Observable<any>{
    
    return this.http.get<any>('/cliente/ObtenerClientes')
    

  }

  //crear

  crearComentario(foro:Respons){
    return this.http.post(`${this.url}/cliente/guardarcliente`,foro)
                .pipe(
                  map ((resp:any)=>{
                    foro.id=resp.name;
                    return foro;

                  })
                );

  }

  //  getCliente(){
  //   const url ='https://localhost:4200/cliente/ObtenerClientes';
  //   return this.http.get(url)

     
    
  // }

                    //Actualizar
  actualizarClientes(foro:Respons){
    return this.http.put(`${this.url}/cliente/ModificarCliente/${foro.id}`,foro);

  }


              
}
