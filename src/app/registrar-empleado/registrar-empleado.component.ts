import { Component } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.scss'],
})
export class RegistrarEmpleadoComponent {
  empleado: Empleado = new Empleado();

  ngOnInit() {
    console.log(this.empleado);
  }

  onSubmit() {}
}
