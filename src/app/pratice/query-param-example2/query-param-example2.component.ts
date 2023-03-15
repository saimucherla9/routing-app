import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param-example2',
  templateUrl: './query-param-example2.component.html',
  styleUrls: ['./query-param-example2.component.css']
})
export class QueryParamExample2Component implements OnInit {
  empId: any;
  empName: any;
  fragmentName: any;


  constructor(private activeroute: ActivatedRoute){}

  ngOnInit(): void {
    this.empId = this.activeroute.snapshot.queryParams["empId"];
    this.empName = this.activeroute.snapshot.queryParams["empName"];
    this.fragmentName = this.activeroute.snapshot.fragment;
  }

}
