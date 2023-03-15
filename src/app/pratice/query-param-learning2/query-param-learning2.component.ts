import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-param-learning2',
  templateUrl: './query-param-learning2.component.html',
  styleUrls: ['./query-param-learning2.component.css']
})
export class QueryParamLearning2Component implements OnInit {

  constructor(private router:Router){

  }

  ngOnInit(): void {
  }

  navigateToURL() {

    this.router.navigate(['/query-param-learning'],{ queryParams: {id:12,name:"vijay"},fragment:"loading" });
}

}
