import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  constructor() {}
   dbdata= [
      { Qt:1, f_Name:'Rose', Color:'Red'},
      { Qt:2, f_Name:'Lily',Color :'White'},
      { Qt:3, f_Name:'Tube rose', Color:'Pink'},
      { Qt:4, f_Name:'Lotus', Color:'Pink'},
      { Qt:5, f_Name:'Sunflower', Color:'Yellow'}
    ]
saveflower(d:any){
  this.dbdata.push(d)
}
   
}
