import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForoModel } from 'src/app/models/foro.models';


@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  
  

  constructor( private http:HttpClient) {
    console.log("servicio cliente");
    
   }
   getAll():Observable<any>{
    
    return this.http.get<any>('/cliente/ObtenerClientes')
    

  }

  //  getCliente(){
  //   const url ='https://localhost:4200/cliente/ObtenerClientes';
  //   return this.http.get(url)

     
    
  // }
              
}
