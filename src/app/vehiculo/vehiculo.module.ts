import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListatVehiculosComponent } from './listat-vehiculos/listat-vehiculos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ListatVehiculosComponent],
  declarations: [ListatVehiculosComponent]
})
export class VehiculoModule { }
