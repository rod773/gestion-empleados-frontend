import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor(private httpClient: HttpClient) {}

  private baseURL = 'http://localhost:8080/api/v1/empleados';

  obtenerListaEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }
}
