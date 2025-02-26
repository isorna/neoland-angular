import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login-form',
  imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  message = input('')
  list: any = input<any>([]);

  ngOnInit() {
    console.log('componente cargado')
  }

  onButtonClick() {
    alert('hola')
  }
}
