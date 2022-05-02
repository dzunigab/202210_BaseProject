/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';;
import { ListatVehiculosComponent } from './listat-vehiculos.component';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

describe('ListatVehiculosComponent', () => {
  let component: ListatVehiculosComponent;
  let fixture: ComponentFixture<ListatVehiculosComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListatVehiculosComponent ],
      providers:[VehiculoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatVehiculosComponent);
    component = fixture.componentInstance;
    let vehiculo = new Vehiculo(
      1,
      "Renault",
      "Logan",
      "Family",
      2017,
      20000,
      "Rojo",
      "imagen.png"
    );
    let vehiculos: Vehiculo[] = []
    vehiculos.push(vehiculo)
    vehiculos.push(vehiculo)
    vehiculos.push(vehiculo)
    component.vehiculos = vehiculos
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Cantidad de registros en la tabla ', () => {
    expect(debug.queryAll(By.css('.rowTabla')).length).toBe(
      3
    );
  });
});
