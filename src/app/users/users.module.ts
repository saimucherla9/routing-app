import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { ParamsComponent } from './params/params.component';
import { DynamicLinkComponent } from './dynamic-link/dynamic-link.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    NotfoundComponent,
    AboutmeComponent,
    AboutcompanyComponent,
    ParamsComponent,
    DynamicLinkComponent
  ],
  imports: [CommonModule,RouterModule],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent
  ]
})
export class UsersModule {}
