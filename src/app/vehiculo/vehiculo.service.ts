import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private urlAPI: string = environment.URL_API;

  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.urlAPI);
  }
}
