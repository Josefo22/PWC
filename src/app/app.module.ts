import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { NuevoclienteComponent } from './nuevocliente/nuevocliente.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { EditarclienteComponent } from './editarcliente/editarcliente.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PresentacionComponent,
    NuevoclienteComponent,
    ListadoclientesComponent,
    EditarclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
