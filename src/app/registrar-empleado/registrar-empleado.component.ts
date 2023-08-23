import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.scss'],
})
export class RegistrarEmpleadoComponent {
  empleado: Empleado = new Empleado();

  constructor(
    private empleadoServicio: EmpleadoService,
    private router: Router
  ) {}

  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(
      (dato) => {
        console.log(dato);
        this.irListaEmpleados();
      },
      (error) => console.log(error)
    );
  }

  irListaEmpleados() {
    this.router.navigate(['/empleados']);
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.empleado);
    this.guardarEmpleado();
  }
}
