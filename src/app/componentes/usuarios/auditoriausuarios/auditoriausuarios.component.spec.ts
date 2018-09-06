import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriausuariosComponent } from './auditoriausuarios.component';

describe('AuditoriausuariosComponent', () => {
  let component: AuditoriausuariosComponent;
  let fixture: ComponentFixture<AuditoriausuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriausuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriausuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
