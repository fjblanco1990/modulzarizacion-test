import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { PublicacionComponent } from './Publicaciones/publicaciones.component';


@NgModule({
  declarations: [
    FormularioComponent,
    PublicacionComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule
  ]
})
export class PublicacionesModule { }
