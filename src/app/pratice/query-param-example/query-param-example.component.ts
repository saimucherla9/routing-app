import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-param-example',
  templateUrl: './query-param-example.component.html',
  styleUrls: ['./query-param-example.component.css']
})
export class QueryParamExampleComponent implements OnInit {

  constructor(private router:Router){

  }


  ngOnInit(): void {

  }


  navigateToURLExampleButton(){
    this.router.navigate(['/query-param-example2'],{queryParams: {empId: 1, empName: "Sai"}, fragment: "ganesh" })
  }
}
