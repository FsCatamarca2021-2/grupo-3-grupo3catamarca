import { Component, OnInit } from '@angular/core';

import { BitcoinService } from '../../services/bitcoin.service';
//registro

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  mostrarClien : any []=[];

  constructor(private clientesServicio: BitcoinService) {
   
  }

  ngOnInit(): void {
    this.clientesServicio.mostrarClientes()
        .subscribe ( resp => {
          console.log(resp);
          
          
          
        });
  }

}
