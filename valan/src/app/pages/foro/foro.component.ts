import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ForoModel } from 'src/app/models/foro.models';
import { BitcoinService } from '../../services/bitcoin.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs/internal/Observable';
import { ClienteService } from '../../services/cliente.service';
import { Respons } from 'src/app/models/clientes-response';



@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  foro: ForoModel = new ForoModel();
  // comen: Respons= new Respons();
  conen : Respons = new Respons();
  
  constructor(private firebaseService: BitcoinService,
              private comentarioService: ClienteService) { }

  ngOnInit() { }
  guardar(form: NgForm){
 
 
 
 
    if (form.invalid){
      console.log('Formulario no válido');
      return;
      
    }
    this.comentarioService.crearComentario(this.conen)
        .subscribe (resp =>{
          console.log(resp);
          
        });
    
    Swal.fire({
      title:'Espere',
      text:'Guardando Información',
      allowOutsideClick:false,
      
      
    });
    Swal.showLoading();
    let peticion:Observable<any>;

    if (this.foro.id){
     peticion= this.firebaseService.actualizarComentario (this.foro); 

    }else{

      peticion= this.firebaseService.crearComentario (this.foro);
     
    }
      
      peticion.subscribe (resp=>{
      Swal.fire({
        title:this.foro.nombre,
        text: 'Se actualizó correctamente',
        
      });
    });
      
  }

}
