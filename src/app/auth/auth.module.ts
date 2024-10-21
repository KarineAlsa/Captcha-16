import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaV3Module } from 'ng-recaptcha';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecaptchaV3Module,
    MatFormFieldModule, 
    MatInputModule,     
    MatButtonModule,     
    MatCardModule 
  ],
  exports: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule {}
