import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerusuariosComponent } from './verusuarios.component';

describe('VerusuariosComponent', () => {
  let component: VerusuariosComponent;
  let fixture: ComponentFixture<VerusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
