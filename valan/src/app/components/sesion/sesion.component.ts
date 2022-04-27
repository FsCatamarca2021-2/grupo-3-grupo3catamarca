import { HttpClientJsonpModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from 'src/app/models/usuario.model';

 


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  nombre:string='Nombre';
  //manipular el DOM
  



  //Modelos
  usuario: UsuarioModel= new UsuarioModel();
  recordarme=false;
  usuarios: UsuarioModel []=[];
  
  constructor(private auth:AuthService,
              private router: Router,
              private route:ActivatedRoute,
              private render2:Renderer2) { }

  ngOnInit(): void {
   

    // if(localStorage.getItem('email')){
    //   this.usuario.email= localStorage.getItem('email');
    //   this.recordarme=true;
    // }



    
  }
//manipular Dom
  // change():void{
  //  const boton=document.getElementById ("servicio");
  //  boton?.addEventListener('click', function(){
  //    const capa=document.getElementById("sesion");
  //  },false);
  // }

  

 


  // Consumo de Servicio 

  login (forms:NgForm){
    if (forms.invalid){return;}
    console.log('formulario',forms);
    
    Swal.fire({
      allowOutsideClick:false,
     icon:'success',
      text:'Espere por favor...',
      timer:2000,
    });
    Swal.showLoading();
   


    
    
      this.auth.login(this.usuario)
          .subscribe ((resp:any)=>{
            this.usuario=resp;
           console.log("Sesion Logueados",resp);
           if(this.usuario.id_Usuario == 0)
           Swal.fire({text:'El usuario NO Existe!', icon: 'error'}),
           console.log("No existe el usuario");
           else {
              this.router.navigateByUrl(`/menu/${this.usuario.id_Usuario}`);
            // this.router.navigateByUrl(`/menu/dash`);
           }
           
           
          
           
            //Swal.close();
            
            // if(this.recordarme){
            //   localStorage.setItem('email',this.usuario.email);
            // }
            
            
            
          });
      
          
  }
  
   

}

// , (err)=>{
//   Swal.fire({
    
//     allowOutsideClick:false,
//     title:'Error al autenticar',
    
//   });
// }



// ,(err)=>{
//   console.log(err.error.text);
//   Swal.fire({
//     title:'Atención',
    
//     text:err.error.text
//   });
//   this.router.navigateByUrl('/menu');
// }