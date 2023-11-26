import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListaCursosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'cursos', component: ListaCursosComponent },
    ]),
  ],
})
export class CursosModule { }