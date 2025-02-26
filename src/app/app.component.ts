import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Alvaro';
  mensaje = 'Formulario de login';
  list = [
    { id: 0, nombre: 'fruta'},
    { id: 1, nombre: 'carne'},
    { id: 2, nombre: 'leche'},
    { id: 3, nombre: 'pescado'}
  ];
}
