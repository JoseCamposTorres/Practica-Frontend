import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEstudiantesComponent } from './estudiantes/lista-estudiantes/lista-estudiantes.component';
import { ListaCursosComponent } from './cursos/lista-cursos/lista-cursos.component';
import { ProcesoMatriculaComponent } from './matricula/proceso-matricula/proceso-matricula.component';

const routes: Routes = [
  { path: 'estudiantes', component: ListaEstudiantesComponent },
  { path: 'cursos', component: ListaCursosComponent },
  { path: 'matricula', component: ProcesoMatriculaComponent },
  { path: '', redirectTo: '/estudiantes', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
