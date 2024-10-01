import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-listadoclientes',
  templateUrl: './listadoclientes.component.html',
  styleUrl: './listadoclientes.component.css'
})
export class ListadoclientesComponent {

  clientes:Cliente[]=[];
  
  constructor(private clienteservice:ClienteService){}

  ngOnInit(): void {
    this.clientes=this.clienteservice.clientes;   
  }

  Eliminar(i:any){
    this.clienteservice.EliminarCliente(i);
  }
  

}
