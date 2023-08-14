import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { VerificationComponent } from './verification/verification.component';
import { SignComponent } from './sign/sign.component';
import { ProfileregComponent } from './profilereg/profilereg.component';
import { RegformComponent } from './regform/regform.component';
const routes: Routes = [{
  path:'',component:WelcomepageComponent
},

{
  path:'registration',component:RegistrationComponent
},
{
  path:'login',component:LoginComponent
},
{
  path:'verification',component:VerificationComponent
},
{
  path:'sign',component:SignComponent
},
{
  path:'profilereg',component:ProfileregComponent
},
{
  path:'regform',component:RegformComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
