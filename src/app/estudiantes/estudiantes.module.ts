import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListaEstudiantesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'estudiantes', component: ListaEstudiantesComponent },
    ]),
  ],
})
export class EstudiantesModule { }