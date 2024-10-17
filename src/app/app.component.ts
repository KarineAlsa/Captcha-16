import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  key = environment.key
  captchaToken: string | null = null;

  onCaptchaResolved(token: string) {
    console.log("reCAPTCHA v2 Token:", token);
    this.captchaToken = token;
  }

  submit() {
    if (this.captchaToken) {
      console.log("Enviar al backend con token:", this.captchaToken);
    } else {
      console.log("Completa el captcha antes de enviar.");
    }
  }
}
