import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrl: './editarcliente.component.css'
})
export class EditarclienteComponent {

  clientes:Cliente[];

  idCliente:string;
  nombreCliente:string;
  telefonoCliente:string;
  correoCliente:string;
  

  constructor(private rutaactiva:ActivatedRoute, 
              private clienteservice:ClienteService,
              private router:Router){
  }

  ngOnInit(): void {
    let idEditar = this.rutaactiva.snapshot.paramMap.get('id')
    console.log(idEditar);
    this.clienteEditar(idEditar);
  }

  clienteEditar(id:any){
    this.clientes=this.clienteservice.clientes;
    this.idCliente=this.clientes[id].idCliente;
    this.nombreCliente=this.clientes[id].nombreCliente;
    this.telefonoCliente=this.clientes[id].telefonoCliente;  
    this.correoCliente=this.clientes[id].correoCliente;
  }

  GuardarCambios(){
    let id = this.rutaactiva.snapshot.paramMap.get('id')
    const clienteeditado ={
      "idCliente":this.idCliente,
      "nombreCliente":this.nombreCliente,
      "telefonoCliente":this.telefonoCliente,
      "correoCliente":this.telefonoCliente
    }
    this.clienteservice.EditarCliente(id,clienteeditado);
    alert("Cambios realizados correctamente, el Cliente "+this.idCliente+" ");
    this.router.navigate(['/listadoclientes']);

  }

}
