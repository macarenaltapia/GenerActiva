import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComoTrabajamosComponent} from './components/como-trabajamos/como-trabajamos.component';
import {QueHacemosComponent} from './components/que-hacemos/que-hacemos.component'
import {HomeComponent} from './components/home/home.component'
import { FormularioPhpComponent } from './shared/formulario-php/formulario-php.component';

const routes: Routes = [
  {path: 'Inicio', component: HomeComponent},
  {path:'Inicio/formulario',component: FormularioPhpComponent},
  {path: 'QueHacemos', component: QueHacemosComponent},
  {path: 'ComoTrabajamos', component: ComoTrabajamosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Inicio'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: true, anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
