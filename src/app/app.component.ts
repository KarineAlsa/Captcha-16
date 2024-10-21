import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  token: string | null = null;

  constructor(
    private fb: FormBuilder,
    private recaptchaV3Service: ReCaptchaV3Service,
  ) {this.myForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    recaptcha: ['']
  });
}

  executeImportantAction() {
    if (this.myForm.valid) {
      this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
        console.log("reCAPTCHA v3 Token:", token);
        
      });
  }
}
}