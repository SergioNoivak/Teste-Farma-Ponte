import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaResumoComponent } from './tela-resumo.component';

describe('TelaResumoComponent', () => {
  let component: TelaResumoComponent;
  let fixture: ComponentFixture<TelaResumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaResumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
