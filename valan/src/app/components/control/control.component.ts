import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';
import { Borrar } from '../../models/usuario.model';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  client: Borrar []=[];
  clientes: UsuarioModel []=[];
  
  
  constructor(private usuario:AuthService,
              private ClienteService:ClienteService) { }

  ngOnInit(): void {
    

    this.usuario.getUsuario()
        .subscribe(resp=>{
          console.log("control", resp);
          
          this.clientes=resp;
        });


        
        

        
        
        
      }
      //borrar usuario
      borrarUsuario(cliente:UsuarioModel, i:number){

        Swal.fire({
          icon:'question',
          title: 'Estás seguro ?',
          text:`Estás seguro que deseas borrar a ${cliente.nombre}`,
          
          showConfirmButton: true,
          showCancelButton:true

        }).then(resp=>{
          if (resp.value){

            this.clientes.splice(i,1);
            this.ClienteService.borrarUsuario(cliente.id_Usuario).subscribe();
          }
        });

      }


      

}
