import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractparamsComponent } from './pratice/extractparams/extractparams.component';
import { ParamsDynamicComponent } from './pratice/params-dynamic/params-dynamic.component';
import { QueryParamExampleComponent } from './pratice/query-param-example/query-param-example.component';
import { QueryParamExample2Component } from './pratice/query-param-example2/query-param-example2.component';
import { QueryParamLearningComponent } from './pratice/query-param-learning/query-param-learning.component';
import { QueryParamLearning2Component } from './pratice/query-param-learning2/query-param-learning2.component';
import { StaticComponent } from './pratice/static/static.component';
import { AboutComponent } from './users/about/about.component';
import { AboutcompanyComponent } from './users/aboutcompany/aboutcompany.component';
import { AboutmeComponent } from './users/aboutme/aboutme.component';
import { ContactComponent } from './users/contact/contact.component';
import { DynamicLinkComponent } from './users/dynamic-link/dynamic-link.component';
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
  { path: 'extract-param-link/:empId/:empId2', component: ExtractparamsComponent },
  { path: 'dynamic-link', component: DynamicLinkComponent },
  { path: 'static', component: StaticComponent },
  { path: 'params-dynamice', component: ParamsDynamicComponent },
  { path: 'query-param-learning', component: QueryParamLearningComponent },
  { path: 'query-param-learning2', component: QueryParamLearning2Component },
  { path: 'query-param-example', component: QueryParamExampleComponent },
  { path: 'query-param-example2', component: QueryParamExample2Component },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
