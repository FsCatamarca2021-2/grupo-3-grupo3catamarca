import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoComponent } from './foro/foro.component';
import { PortadaComponent } from './portada/portada.component';
import { Portada2Component } from './portada2/portada2.component';
import { Portada3Component } from './portada3/portada3.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistrosComponent } from './registros/registros.component';



@NgModule({
  declarations: [
    ForoComponent,
    PortadaComponent,
    Portada2Component,
    Portada3Component,
    RegistroComponent,
    RegistrosComponent
  ],
  exports:[
    ForoComponent,
    PortadaComponent,
    Portada2Component,
    Portada3Component
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
