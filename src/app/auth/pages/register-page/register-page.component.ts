import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service.service';
import { Warning } from '../../interfaces/warning-checks.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public registerForm: FormGroup = this.fb.group({
    /* userName: ['', [Validators.minLength(4), Validators.pattern(this.validatorsService.spacesPattern)]], */
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(this.validatorsService.passwordPattern)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: [
      this.validatorsService.comparePasswordFields('password', 'confirmPassword')
    ]
  });

  public passwordWarnings: Warning[] | null = [];

  public fbErrorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private userService: UserService,
    private router: Router,
  ) { }

  public isConfirmPasswortEqualToPassword(){
    const control = this.registerForm.get('confirmPassword');
    return !!control?.touched && !!control?.value && control.errors?.['notEqual'];
  }

  public isValidEmail(){
    const control = this.registerForm.get('email');
    return !!control?.touched && !!control?.value && !this.validatorsService.emailPattern.test(control.value);
  }

  public hasSpacesField(field: string): boolean {
    const control = this.registerForm.get(field);
    return !!control?.touched && !!control?.value && !this.validatorsService.spacesPattern.test(control.value);
  }

  public isLengthFieldCorrect(field: string): boolean {
    const control = this.registerForm.controls[field];
    return control?.errors?.['minlength'] && control.touched;
  }

  public isRequiredField(field: string): boolean {
    const control = this.registerForm.controls[field];
    return control?.errors?.['required'] && control.touched;
  }

  public showPasswordWarnings() {
    const control = this.registerForm.get('password');
    return !control?.errors?.['required'] && (control?.errors?.['minlength'] || control?.errors?.['pattern']);
  }

  public validatePasswordPattern = (): void => {
    const passwordValue = this.registerForm.controls['password'].value;
    this.passwordWarnings = this.validatorsService.validatePasswordPattern(passwordValue);
  }

  public registerUser() {
    if (this.registerForm.invalid) return;
    this.userService.registerUser(this.registerForm.value)
      .then((response) => {
        this.router.navigate(['']);//!no se si dberia llevar al login, verlo despues con guards
      })
      .catch( error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.fbErrorMessage = 'This email is already in use.';
            break;
          case 'auth/invalid-email':
            this.fbErrorMessage = 'Please enter a valid email address.';
            break;
          case 'auth/weak-password':
            this.fbErrorMessage = 'Password must be at least 6 characters long.';
            break;
          default:
            this.fbErrorMessage = 'An unexpected error occurred. Please try again later.';
            break;
        }
      });
  }
}
