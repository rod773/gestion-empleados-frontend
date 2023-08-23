import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss'],
})
export class ListaEmpleadosComponent {
  empleados: Empleado[];

  constructor(private empleadoService: EmpleadoService) {}

  private obtenerEmpleados() {
    this.empleadoService.obtenerListaEmpleados().subscribe((dato) => {
      this.empleados = dato;
    });
  }

  ngOnInit() {
    this.obtenerEmpleados();
  }
}
