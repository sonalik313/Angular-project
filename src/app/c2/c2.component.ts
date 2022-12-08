import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor( private emp:Service1Service) { }

  ngOnInit(): void {
  }
e_name:any;
e_id:any;
e_dept:any;

onEmp()
{
  this.emp.save_emp({ Id:this.e_id, Name:this.e_name, Dept:this.e_dept})
}



}
