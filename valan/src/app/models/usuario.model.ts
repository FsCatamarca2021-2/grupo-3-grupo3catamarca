export class UsuarioModel {
id_Usuario:number;
 apellido:string;
// dni:string;
// nacimiento:string;
// celular:string;
// direccion:string;
// numeracion:string;
// departamento:string;
// piso:string;
// barrio:string;
// edad:string;
// provincia:string;
// genero:string;
email:string;
password:string;
nombre:string;
saldo:number;

    constructor() {
        this.id_Usuario=0;
        this.email="";
        this.password="";
        this.nombre="";
        this.saldo=0
        this.apellido="";
        // this.dni="";
        // this.nacimiento="";
        // this.celular="";
        // this.direccion="";
        // this.numeracion="";
        // this.departamento="";
        // this.piso="";
        // this.barrio="";
        // this.edad="";
        // this.provincia="";
        // this.genero="";

           
    }
}

export interface Borrar{
    Id_Usuario:number;
    nombre:string;
    saldo:number;
    
}