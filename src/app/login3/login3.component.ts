import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {
  password="";
  username="";
  errorMsg="";
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

login(){
  if(this.username.trim().length===0){
   this.errorMsg="Username is required";
  }
   else if(this.password.trim().length===0){
    this.errorMsg="Password is required";
  }
  else{
    this.errorMsg=" ";
    let res =this.auth.login(this.username,this.password);
    if(res===200){
      this.router.navigate(['home3'])
    }
    if(res=== 403){
      this.errorMsg= "Invalid Credentials";
    }
  }

}
}
