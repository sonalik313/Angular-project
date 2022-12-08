import { Component, OnInit, ɵɵpureFunction1 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
myvar= 'alpha'
num=4
name='Sonali'
last='Kabade'
user_nam='Sonali'
user_num1= 5
n1= 10
n2=12
res_sum=0
new1=''
tt:any;
t1:any;
t2:any;


fun1(a:any)
{
this.user_nam=a.value
}

fun2(a:any)
{
  this.user_num1=a.value
}

fun3(a:any, b:any)
{
this.res_sum= Number(a.value)+Number(b.value)

}

msg:any;
u:any;
p:any;
log()
{
  if( this.u=='sonali'&& this.p=='123'){
    this.msg='Login Done';
  }
  else{
    this.msg='Login Failed'
  }
}


}
