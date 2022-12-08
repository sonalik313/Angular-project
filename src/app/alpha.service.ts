import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlphaService {

  constructor() { }
stddt=[
    { Id:1, Name:'sayansh', Dept:'maths'},
    { Id:2, Name:'sandesh', Dept:'physics'},
    { Id:3, Name:'sai', Dept:'chemistry'},
    { Id:4, Name:'reva', Dept:'cs'},
    { Id:5, Name:'vaishali', Dept:'IT'}
  ]
  get_stddt() 
  {
    return this.stddt
  }
  save_std(data:any){
    this.stddt.push(data)}
}
