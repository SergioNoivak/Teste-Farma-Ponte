import { TestBed } from '@angular/core/testing';

import { ClienteGrupoService } from './cliente-grupo.service';

describe('ClienteGrupoService', () => {
  let service: ClienteGrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteGrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
