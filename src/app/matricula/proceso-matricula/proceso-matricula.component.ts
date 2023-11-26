import { Component } from '@angular/core';

@Component({
  selector: 'app-proceso-matricula',
  templateUrl: './proceso-matricula.component.html',
  styleUrls: ['./proceso-matricula.component.css']
})
export class ProcesoMatriculaComponent {
  nuevoEstudiante: string = '';
  cursoSeleccionado: string = '';
  estudiantes: { nombre: string; curso: string }[] = [];

  matricularEstudiante(event: Event) {
    event.preventDefault();

    if (this.nuevoEstudiante && this.cursoSeleccionado) {
      this.estudiantes.push({
        nombre: this.nuevoEstudiante,
        curso: this.cursoSeleccionado,
      });

      // Limpiar los campos del formulario después de matricular al estudiante
      this.nuevoEstudiante = '';
      this.cursoSeleccionado = '';
    }
  }
}
