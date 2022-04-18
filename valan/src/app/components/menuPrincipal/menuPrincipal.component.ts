import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-menuPrincipal',
  templateUrl: './menuPrincipal.component.html',
  styleUrls: ['./menuPrincipal.component.css']
})
export class MenuPrincipalComponent {
  clientes: UsuarioModel []=[];
  cargando =false;

  constructor(private router:Router,
    private clienteService:ClienteService) { }

  ngOnInit(): void {

    this.cargando=true;
   
    //Servicio para mostrar clientes y su dinero
 
 
     this.clienteService.mostrarClientesMonto()
         .subscribe((res)=>{
           console.log('res',res);
           this.clientes=res;
           this.cargando=false;
          
         });
 


  }
salir(){
  this.router.navigateByUrl('/sesion')
}
}
 
