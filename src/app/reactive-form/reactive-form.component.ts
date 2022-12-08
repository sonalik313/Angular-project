import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiMongService } from '../api-mong.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor( private apiser: ApiMongService, private actr:ActivatedRoute) { }

  ngOnInit(): void {
    this.actr.params.subscribe(
      (p)=>{this.cid=p['id']}
    )
  }
  cid:any;
myForm=new FormGroup({
  id:new FormControl('',Validators.required),
  name:new FormControl('',[Validators.required,Validators.minLength(3)]),
  dept:new FormControl(''),
  salary: new FormControl('',[Validators.required,Validators.min(1)]),
  location: new FormControl(''),
  email: new FormControl('',[Validators.required])

})

// upd(){
//  updser .upst(this.myForm.value,this.id).subscribe((res)=>{console.log(res)})
// }
show(){
  console.log(this.myForm.value);
  this.apiser.uppro(this.cid,this.myForm.value).subscribe(
    (info)=>{console.log(info)}
  )
}


get err(){ return this.myForm.controls}


}
