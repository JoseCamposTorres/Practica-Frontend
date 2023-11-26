import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { CursosModule } from './cursos/cursos.module';
import { MatriculaModule } from './matricula/matricula.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstudiantesModule,
    CursosModule,
    MatriculaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }