import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TranferenciasComponent } from './tranferenicas/tranferencias/tranferencias.component';



@NgModule({
  declarations: [
    FooterComponent,
    TranferenciasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
