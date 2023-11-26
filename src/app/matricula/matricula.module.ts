import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcesoMatriculaComponent } from './proceso-matricula/proceso-matricula.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProcesoMatriculaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'matricula', component: ProcesoMatriculaComponent },
    ]),
  ],
})
export class MatriculaModule { }