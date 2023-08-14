import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { VerificationComponent } from './verification/verification.component';
import { SignComponent } from './sign/sign.component';
import { ProfileregComponent } from './profilereg/profilereg.component';
import { RegformComponent } from './regform/regform.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    RegistrationComponent,
    HeaderComponent,
    LoginComponent,
    VerificationComponent,
    SignComponent,
    ProfileregComponent,
    RegformComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
