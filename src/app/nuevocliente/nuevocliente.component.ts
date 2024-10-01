import { Component } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrl: './nuevocliente.component.css'
})
export class NuevoclienteComponent {

  idCliente:string;
  nombreCliente:string;
  telefonoCliente:string;
  correoCliente:string;

  constructor( private clienteservice:ClienteService, private router:Router){}

  AgregarCliente(){
    const nuevocliente = {
      "idCliente":this.idCliente,
      "nombreCliente":this.nombreCliente,
      "telefonoCliente":this.telefonoCliente,
      "correoCliente":this.correoCliente
    }
    this.clienteservice.Agrear(nuevocliente);
    alert("El cliente "+this.nombreCliente+" se agrego correctamente")
    this.router.navigate(['/listadoclientes'])
  }

}
