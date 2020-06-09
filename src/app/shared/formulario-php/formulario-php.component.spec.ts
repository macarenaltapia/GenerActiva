import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPhpComponent } from './formulario-php.component';

describe('FormularioPhpComponent', () => {
  let component: FormularioPhpComponent;
  let fixture: ComponentFixture<FormularioPhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
