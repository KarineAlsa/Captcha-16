import { Component } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
@Component({
  selector: 'app-root',
  template: `
  <button (click)="executeImportantAction()">Important action</button>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
  ) {
  }

  public executeImportantAction(): void {
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      console.log("reCAPTCHA v3 Token:", token);
      
    });
  }
}