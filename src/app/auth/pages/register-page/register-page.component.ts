import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service.service';
import { Warning } from '../../interfaces/warning-checks.interface';


@Component({
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public registerForm: FormGroup = this.fb.group({
    userName: ['', [Validators.minLength(4), Validators.pattern(this.validatorsService.spacesPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(this.validatorsService.passwordPattern)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: [
      this.validatorsService.comparePasswordFields('password', 'confirmPassword')
    ]
  });

  public passwordWarnings: Warning[] | null = [];

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) { }

  /* public validateField(field: string) {
    const control = this.registerForm.controls[field];

    if (!control) return false;

    if (!control.touched) return false;

    if (control.errors?.['required']) {
      return 'This field is required';
    }

  } */
/*
  public showErrorsField(field: string) {
    const control = this.registerForm.controls[field];
    if (!control || !control.touched) return false;

    const errorMessages = [];

    if (control.errors?.['pattern']?.['requiredPattern'] === this.validatorsService.spacesPattern) {

    }
    //tengo q identificar el campo que es y luego los errores de ese campo

  } *///?me falta las de firebase asincronas y crear user supongo

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

  }
}
