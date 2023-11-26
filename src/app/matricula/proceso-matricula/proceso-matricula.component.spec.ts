import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoMatriculaComponent } from './proceso-matricula.component';

describe('ProcesoMatriculaComponent', () => {
  let component: ProcesoMatriculaComponent;
  let fixture: ComponentFixture<ProcesoMatriculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesoMatriculaComponent]
    });
    fixture = TestBed.createComponent(ProcesoMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
