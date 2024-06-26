import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ValidatorsService } from '../../services/validators.service.service';

@Component({
  templateUrl: './forgot-password-page.component.html',
  styleUrl: './forgot-password-page.component.css'
})
export class ForgotPasswordPageComponent {

  public forgotForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
  });

  public fbErrorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }


  //? dejo el remember me de manera automatica, como si
  //todo: Forgot your password?


  public isRequiredField(field: string): boolean {
    const control = this.forgotForm.controls[field];
    return control?.errors?.['required'] && control.touched;
  }

  public resetPassword(): void {//? en local no funciona
    if (this.forgotForm.invalid) return;

    this.userService.forgotPassword(this.forgotForm.get('email')?.value)
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch( error => {
      switch (error.code) {
        case 'auth/invalid-email':
          this.fbErrorMessage = 'Invalid email.';
          break;
        case 'auth/user-not-found':
          this.fbErrorMessage = 'There is no user corresponding to the email address.';
          break;
        default:
          this.fbErrorMessage = 'An unexpected error occurred. Please try again later.';
          break;
      }
    });

  }
}
