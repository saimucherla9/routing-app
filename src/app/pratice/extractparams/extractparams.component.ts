import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-extractparams',
  templateUrl: './extractparams.component.html',
  styleUrls: ['./extractparams.component.css']
})
export class ExtractparamsComponent implements OnInit {
  empId: any;
  empId2: any;
  constructor(private activatedRouter:ActivatedRoute){

  }


  ngOnInit(): void {
    this.empId=this.activatedRouter.snapshot.params["empId"];
    this.empId2=this.activatedRouter.snapshot.params["empId2"];
  }

}
