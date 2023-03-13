import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit{

  userId:any="testId";
  deptId:any="testDeptId";

  constructor(private activatedRouter:ActivatedRoute){

  }

  ngOnInit(): void {
    this.userId=this.activatedRouter.snapshot.params["userId"];
    this.deptId=this.activatedRouter.snapshot.params["deptId"];
  }


}
