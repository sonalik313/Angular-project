import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiMongService } from '../api-mong.service';
@Component({
  selector: 'app-empdetails-post',
  templateUrl: './empdetails-post.component.html',
  styleUrls: ['./empdetails-post.component.css']
})
export class EmpdetailsPostComponent implements OnInit {

  constructor(private apis: ApiMongService)  { }

  ngOnInit(){
     
  }


myForm=new FormGroup({
  id:new FormControl('',Validators.required),
  name:new FormControl('',[Validators.required,Validators.minLength(3)]),
  dept:new FormControl(''),
  salary: new FormControl('',[Validators.required,Validators.min(1)]),
  city: new FormControl(''),
  town: new FormControl(''),
  email: new FormControl('',[Validators.required])

})

showPost(){
  console.log(this.myForm.value);
  this.apis.addemp(this.myForm.value).subscribe(
    (info)=>{console.log(info)}
  )
}
get err(){ return this.myForm.controls}
}
