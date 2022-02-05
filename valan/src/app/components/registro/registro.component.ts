import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cargando:boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.cargando=true;
    setTimeout(() => this.cargando =false, 3000 )
  }

}
