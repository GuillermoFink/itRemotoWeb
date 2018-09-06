import { TestBed, inject } from '@angular/core/testing';

import { ServicioUsuarioService } from './servicio-usuario.service';

describe('ServicioUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioUsuarioService]
    });
  });

  it('should be created', inject([ServicioUsuarioService], (service: ServicioUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
