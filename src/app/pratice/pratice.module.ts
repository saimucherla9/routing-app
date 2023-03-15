import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticComponent } from './static/static.component';
import { ParamsDynamicComponent } from './params-dynamic/params-dynamic.component';
import { RouterModule } from '@angular/router';
import { ExtractparamsComponent } from './extractparams/extractparams.component';
import { QueryParamLearningComponent } from './query-param-learning/query-param-learning.component';
import { QueryParamLearning2Component } from './query-param-learning2/query-param-learning2.component';
import { QueryParamExampleComponent } from './query-param-example/query-param-example.component';
import { QueryParamExample2Component } from './query-param-example2/query-param-example2.component';



@NgModule({
  declarations: [

  
    QueryParamLearningComponent,
        QueryParamLearning2Component,
        QueryParamExampleComponent,
        QueryParamExample2Component
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class PraticeModule { }
