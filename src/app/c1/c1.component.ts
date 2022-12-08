import { Component, Input, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private emp:Service1Service) { }

  ngOnInit(): void {
    this.get_myemp()
  }
@Input()a:any;

my_emp:any
get_myemp()
{
  this.my_emp=this.emp.get_empdt()
}
}
