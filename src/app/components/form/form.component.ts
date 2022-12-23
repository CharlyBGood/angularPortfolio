import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  nombre: string = '';
  telefono = '';
  dni = '';

  cambiaDni(valor: string) {
    // Podes consultar el valor por consola
    console.log(valor);
    this.dni = valor;
  }
}
