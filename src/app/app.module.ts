import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RECAPTCHA_V3_SITE_KEY,RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaV3Module,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    NoopAnimationsModule
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.key }],
  bootstrap: [AppComponent]
})
export class AppModule { }
