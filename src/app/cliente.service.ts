import { Injectable } from '@angular/core';
import { Cliente } from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes:Cliente[]=[];
  
  constructor( ) { }

  Agrear(nuevocliente:Cliente){
    this.clientes.push(nuevocliente);
    console.log(this.clientes);
  }

  EditarCliente(id:any,clienteeditado:any){
    this.clientes.splice(id,1,clienteeditado);
  }

  EliminarCliente(id:any){
    this.clientes.splice(id,1);
  }


}


