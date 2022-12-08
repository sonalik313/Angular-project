import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  empdt=[
    { Id:1, Name:'sayansh', Dept:'maths'},
    { Id:2, Name:'sandesh', Dept:'physics'},
    { Id:3, Name:'sai', Dept:'chemistry'},
    { Id:4, Name:'reva', Dept:'cs'},
    { Id:5, Name:'vaishali', Dept:'IT'}
  ]

get_empdt() 
{
  return this.empdt
}

save_emp(data:any){
  this.empdt.push(data)
}
}
