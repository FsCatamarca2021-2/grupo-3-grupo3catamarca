import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menuPrincipal',
  templateUrl: './menuPrincipal.component.html',
  styleUrls: ['./menuPrincipal.component.css']
})
export class MenuPrincipalComponent {
  usuario: UsuarioModel= new UsuarioModel();
  clientes: UsuarioModel []=[];
  cargando =false;
  

  //Usuario Login
  

  constructor(private router:Router,
    private clienteService:ClienteService,
    private route:ActivatedRoute,
    private loginService:AuthService) { 
      
    }


  ngOnInit() {
    //usuarioID
    if(this.usuario.id_Usuario==0){
        this.loginService.login(this.usuario).subscribe(res=>{
          console.log("Logueados",res);
          
        })
    }


    // const id=this.route.snapshot.paramMap.get('id');
    // if(id !=='dashboard'){
    //   this.clienteService.getUsuarioId(id).subscribe (res=>{
    //     console.log("usuarioID",res);
        
    //   })

    // }
    
    //Obtener Usuarios

    this.loginService.getUsuario()
        .subscribe(res=>{
          console.log(res);
          
          this.clientes=res;
        })

        

    //  const id =this.route.snapshot.paramMap.get('Id_usuario');
    // if(id !== 'cliente'){
    //   this.loginService.getUsuarioId(id)
    //   .subscribe((resp:any)=>{
    //     this.usuarios=resp;
    //     this.usuarios.id_Usuario=id || '';
        
        

    //   });
    // }
    
    

    this.cargando=true;
   
    //Servicio para mostrar clientes y su dinero
 
 
     this.loginService.login(this.usuario)
         .subscribe((res:any)=>{
           console.log('Respuesta',res);
           this.clientes=res;
           this.cargando=false;
          
         });
 

   }
   cargar() {
    this.clientes;
   }
salir(){
  this.router.navigateByUrl('/sesion')
}
}
 
