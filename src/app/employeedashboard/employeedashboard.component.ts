import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {
  formvalue! : FormGroup

  constructor(private FormBuilder :FormBuilder) { }

  ngOnInit(): void {
    this.formvalue= this.FormBuilder.group ({
      FirstName :[''],
      LastName :[''],
      Email:[''],
      MobileNo:[''],
      Salary :[''],

    })
  }

}
