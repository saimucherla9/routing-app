import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-link',
  templateUrl: './dynamic-link.component.html',
  styleUrls: ['./dynamic-link.component.css']
})
export class DynamicLinkComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {

  }
  JumpToLink(){
    this.router.navigateByUrl("/about") ;
  }

  JumpToLink1(){
    this.router.navigate(["/param-link",2000,12]);
  }
}
