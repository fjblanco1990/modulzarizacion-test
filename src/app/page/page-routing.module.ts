import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbunesComponent } from './Albunes/albunes.component';
import { UsuariosComponent } from './Usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Usuarios', component: UsuariosComponent},
  { path: 'Albunes', component: AlbunesComponent},
  {
    path: 'publicacion',
    loadChildren:() => import('./publicaciones/publicaciones.module').then( module => module.PublicacionesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
