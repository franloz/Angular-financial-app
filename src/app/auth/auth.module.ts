import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        LoginPageComponent,
        RegisterPageComponent,
        AuthLayoutComponent,
        ForgotPasswordPageComponent,
        LogoutComponent
    ],
    exports: [
        LogoutComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class AuthModule { }
