import { Component, OnInit } from '@angular/core';
import { Cantidad } from '../cantidad';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listat-vehiculos',
  templateUrl: './listat-vehiculos.component.html',
  styleUrls: ['./listat-vehiculos.component.css'],
})
export class ListatVehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  grupoMarcas: Cantidad[] = [];
  constructor(private vehiculoService: VehiculoService) {}
  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.validateMarca(vehiculos);
    });
  }
  validateMarca(objectArray: Vehiculo[]): void {
    let arrValidacion: Cantidad[] = [];
    objectArray.map((item) => {
      let k: number = 0;
      let valida: Cantidad = arrValidacion.find((value, index) => {
        if (value.marca == item.marca) {
          k = index;
          return value;
        }
        return undefined;
      }) || { marca: '', cantidad: 1 };
      if (valida.marca == '') {
        valida.marca = item.marca;
        valida.cantidad = 1;
        arrValidacion.push(valida);
      } else {
        arrValidacion[k].cantidad = arrValidacion[k].cantidad + 1;
      }
    });
    this.grupoMarcas = arrValidacion
  }
  ngOnInit() {
    this.getVehiculos();
  }
}
