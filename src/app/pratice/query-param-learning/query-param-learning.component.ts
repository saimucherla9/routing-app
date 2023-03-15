import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param-learning',
  templateUrl: './query-param-learning.component.html',
  styleUrls: ['./query-param-learning.component.css']
})
export class QueryParamLearningComponent  implements OnInit{
//

id:any="";
name:any="";
fragmentValue:any="";
//{id:5,name:"vijay"}

//http://localhost:4200/user?id=5&name=vijay#loading


  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.queryParams["id"];
    this.name=this.activatedRoute.snapshot.queryParams["name"];
    console.log(this.id);
    this.fragmentValue=this.activatedRoute.snapshot.fragment;
  }

}
