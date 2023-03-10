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
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'aboutme', component: AboutmeComponent },
      { path: 'aboutme', component: AboutcompanyComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgetpasswordComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
