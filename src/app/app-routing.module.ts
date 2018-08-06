import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './pages/principal/principal.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

const app_routes: Routes = [
  { path: 'home', component: PrincipalComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
