import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getAPIData } from '../../utils/apis';

@Component({
  selector: 'login-form',
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit() {
    console.log('componente cargado')
  }

  async onFormSubmit() {
    // console.log('submit', this.loginForm.value)
    const loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    let eventDetail
    if (loginData.email !== '' && loginData.password !== '') {
      const payload = JSON.stringify(loginData)
      let apiData = await getAPIData(`${location.protocol}//${location.hostname}:${3333}/api/login`, 'POST', payload)
      if (!apiData) {
        apiData = {
          detail: {
            text: 'No he encontrado el usuario o la contraseña'
          }
        }
      }
      eventDetail = apiData
    } else {
      eventDetail = {
        text: 'No he encontrado el usuario o la contraseña'
      }
    }
    console.log(eventDetail)
  }
}
