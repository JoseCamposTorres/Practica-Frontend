import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {
  cursos = [
    { id: 1, nombre: 'Programación Web' },
    { id: 2, nombre: 'Base de Datos' },
    // Agrega más cursos si es necesario
  ];
}
