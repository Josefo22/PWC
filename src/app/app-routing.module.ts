import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoclienteComponent } from './nuevocliente/nuevocliente.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { EditarclienteComponent } from './editarcliente/editarcliente.component';

const routes: Routes = [
  {path:'',component:NuevoclienteComponent},
  {path:'nuevocliente',component:NuevoclienteComponent},
  {path:'listadoclientes',component:ListadoclientesComponent},
  {path:'editarcliente/:id',component:EditarclienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
