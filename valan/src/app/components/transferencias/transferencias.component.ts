import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {
  usuarios : UsuarioModel =new UsuarioModel;
agenda:any[]=[];
  constructor(private trasnferenciaServices:AuthService,
              private enviarDinero:ClienteService) { }

  ngOnInit(): void {
  
    this.trasnferenciaServices.getUsuario()
        .subscribe(res=>{
          this.agenda=res;
          console.log("agenda",this.agenda);
          
        })

  }
  trasferir(forms:NgForm){
    if(forms.invalid){return;}
    this.enviarDinero.enviarDinero(this.usuarios)
          .subscribe(resp=>{
            return resp;
          })

  }

}
