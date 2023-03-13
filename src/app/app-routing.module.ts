import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './users/about/about.component';
import { AboutcompanyComponent } from './users/aboutcompany/aboutcompany.component';
import { AboutmeComponent } from './users/aboutme/aboutme.component';
import { ContactComponent } from './users/contact/contact.component';
import { ForgetpasswordComponent } from './users/forgetpassword/forgetpassword.component';
import { HomeComponent } from './users/home/home.component';
import { LoginComponent } from './users/login/login.component';
import { NotfoundComponent } from './users/notfound/notfound.component';
import { ParamsComponent } from './users/params/params.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'about-me', component: AboutmeComponent },
      { path: 'about-company', component: AboutcompanyComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgetpasswordComponent },
  { path: 'param-link/:userId/:deptId', component: ParamsComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
