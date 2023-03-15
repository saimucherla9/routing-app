import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { StaticComponent } from './pratice/static/static.component';
import { ParamsDynamicComponent } from './pratice/params-dynamic/params-dynamic.component';
import { ExtractparamsComponent } from './pratice/extractparams/extractparams.component';

@NgModule({
  declarations: [
    AppComponent,StaticComponent,ParamsDynamicComponent,ExtractparamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
