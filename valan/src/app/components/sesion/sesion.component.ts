import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
 


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  usuario: UsuarioModel= new UsuarioModel();
  recordarme=false;

  constructor(private auth:AuthService,
              private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      this.usuario.email= localStorage.getItem('email');
      this.recordarme=true;
    }
  }
  login (forms:NgForm){
    if (forms.invalid){return;}
    console.log('formulario',forms);
    
    Swal.fire({
      allowOutsideClick:false,
      
      text:'Espere por favor...'
    });
    Swal.showLoading();
      
      this.auth.login(this.usuario)
          .subscribe (resp=>{
           
            Swal.close();
            if(this.recordarme){
              localStorage.setItem('email',this.usuario.email);
            }
            this.router.navigateByUrl('/menu');
            
  
          },(err)=>{
            console.log(err.error);
            Swal.fire({
              title:'Error al autenticar',
              
              text:err.error
            });
          });
      
          
  }
  
    

}

// , (err)=>{
//   Swal.fire({
    
//     allowOutsideClick:false,
//     title:'Error al autenticar',
    
//   });
// }