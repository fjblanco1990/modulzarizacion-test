import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { UsuariosComponent } from './Usuarios/usuarios.component';
import { AlbunesComponent } from './Albunes/albunes.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
     HomeComponent,
     UsuariosComponent,
     AlbunesComponent,

  ],
  imports: [
    CommonModule,
    PageRoutingModule,

  ]
})
export class PageModule { }
