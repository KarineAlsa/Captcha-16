import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://72n8t9q3-3000.use2.devtunnels.ms/api/login';

  constructor(private http: HttpClient) {}

  login( recaptchaToken: string): Observable<any> {
    const payload = {
      email: "juan@example.com",
      password: "password123",
      recaptchaToken: recaptchaToken
    };

    return this.http.post(this.apiUrl, payload);
  }
}
