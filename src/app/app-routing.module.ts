import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  {path:'usuario',component:TablaUsuariosComponent},
  {path:'',component:TablaUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
