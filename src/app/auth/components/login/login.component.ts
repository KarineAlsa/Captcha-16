import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recaptchaV3Service: ReCaptchaV3Service,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  onSubmit() {
    
      this.recaptchaV3Service.execute('login').subscribe((token: string) => {
        this.submitForm(token);
      });
    
  }
  submitForm(recaptchaToken: string) {
    console.log('reCAPTCHA v3 Token:', recaptchaToken);
    this.authService.login( recaptchaToken)
      .subscribe(
        response => {
          console.log('Respuesta del servidor:', response);
          
        },
        error => {
          console.error('Error al iniciar sesión:', error);
          
        }
      );
  

    }
}
