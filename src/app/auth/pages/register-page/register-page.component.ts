import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  constructor( private fb: FormBuilder ) {}

  public registerForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)/* espacios en blanco */]],//el pattern es para que solo se puedan escribir letras mayusculas, numeros y guiones bajos
    email: ['', [Validators.required, Validators.email]],
    country : ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword : ['', [Validators.required, Validators.minLength(6)]]
  });


  isRequiredField(field: string): boolean {
    const control = this.registerForm.controls[field];

    if (!control) return false;

    return control.errors?.['required'] && control.touched;
  }

  /* getUserNameErrors() {

    const errors = this.registerForm.controls['userName'].errors || {};

    this.registerForm.controls['userName'].errors['required'];

    //if (!errors) return null;

    for (const key of Object.keys(errors)) {
      if(key === 'minlength') {

      }

    }
  }
 */

  registerUser() {

  }
}
