import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listat-vehiculos',
  templateUrl: './listat-vehiculos.component.html',
  styleUrls: ['./listat-vehiculos.component.css']
})
export class ListatVehiculosComponent implements OnInit {
  vehiculos: Array<Vehiculo> = []

  constructor(private vehiculoService: VehiculoService) { }
  getVehiculos():void{
    this.vehiculoService.getVehiculos().subscribe(vehiculos => this.vehiculos = vehiculos)
  }
  ngOnInit() {
    this.getVehiculos()
  }

}
