import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ForoModel } from 'src/app/models/foro.models';
import { BitcoinService } from '../../services/bitcoin.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs/internal/Observable';



@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  foro = new ForoModel();
  constructor(private foroServices: BitcoinService) { }

  ngOnInit(): void {
  }
  guardar(form: NgForm){

    if (form.invalid){
      console.log('Formulario no válido');
      return;
      
    }
    Swal.fire({
      title:'Espere',
      text:'Guardando Información',
      allowOutsideClick:false,
      
      
    });
    Swal.showLoading();
    let peticion:Observable<any>;

    if (this.foro.idCliente){
     peticion= this.foroServices.actualizarComentario (this.foro); 

    }else{

      peticion= this.foroServices.crearComentario (this.foro);
     
    }
      
      peticion.subscribe (resp=>{
      Swal.fire({
        title:this.foro.nombre,
        text: 'Se actualizó correctamente',
        
      });
    });
      
  }

}
