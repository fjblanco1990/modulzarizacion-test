import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionComponent } from './Publicaciones/publicaciones.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
   { path: 'list', component: PublicacionComponent},
   { path: 'formulario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
