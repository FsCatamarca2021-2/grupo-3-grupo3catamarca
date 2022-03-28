import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { ForoModel } from '../models/foro.models';
import { Respons } from '../models/clientes-response';




@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
private url = 'https://registro-e18eb-default-rtdb.firebaseio.com';



  constructor( private http: HttpClient) {
    console.log('Bitcoin listo');
    
   }
   getNewRelease(){
     return this.http.get('https://coinlib.io/api/v1/coin?key=3b6b849692a12801&pref=USD&symbol=BTC')
      .pipe(map((res:any)=>{
        console.log(res);
        
        return res['markets'];
        
      }));
     
   }

   crearComentario (foro: ForoModel){
     return this.http.post(`${this.url}/registros.json`, foro)
     .pipe (
       map((resp: any)=>{
         foro.id = resp.name;
         console.log();
         
         return foro;
       })
     );
     
   }

   actualizarComentario(foro: ForoModel){
    const registroTemp={
    ...foro
    };
    // delete registroTemp.id;
    return this.http.put(`${this.url}/registros/${foro.id}.json`, registroTemp);
   }
  
   mostrarClientes (){
    const verCli='https://localhost:7086/cliente/ObtenerClientes';
     

     
     return this.http.get<Respons>(verCli);

      }
   

}

// https://coinlib.io/api/v1/coin?key=3b6b849692a12801&pref=USD&symbol=BTC