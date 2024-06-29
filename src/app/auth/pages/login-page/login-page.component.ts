import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {

  public loginForm: FormGroup = this.fb.group({
    email: ['mmmmm@gmajk.co', [Validators.required]],
    password: ['1As%jjjf', [Validators.required]],
  });


  public fbErrorMessage: string = '';

  public isButtonClicked: boolean = false;

  //show password with eye
  public typeInput: 'password' | 'text' = 'password';
  public backgroundImageClass: string = "bg-[url('assets/svgs/eye_password_open.svg')]";

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }


  //? dejo el remember me de manera automatica, como si

  public isRequiredField(field: string): boolean {
    const control = this.loginForm.controls[field];
    return control?.errors?.['required'] && control.touched;
  }



  public loginUser(): void {
    if (this.loginForm.invalid) return;

    this.isButtonClicked = true;

    this.userService.loginUser(this.loginForm.value)
      .then(() => {
        this.isButtonClicked = false;
        this.router.navigate(['']);

      })
      .catch( error => {
        switch (error.code) {
          case 'auth/invalid-email':
            this.fbErrorMessage = 'Invalid email.';
            break;
          case 'auth/wrong-password':
            this.fbErrorMessage = 'Invalid password.';
            break;
          default:
            this.fbErrorMessage = 'An unexpected error occurred. Please try again later.';
            break;
        }
        this.isButtonClicked = false;
      });

  }

  public showPassword() {
    if(this.typeInput === 'password') {
      this.typeInput = 'text';
      this.backgroundImageClass = "bg-[url('assets/svgs/eye_password_close.svg')]";
    } else {
      this.typeInput = 'password';
      this.backgroundImageClass = "bg-[url('assets/svgs/eye_password_open.svg')]";
    }
  }
}
