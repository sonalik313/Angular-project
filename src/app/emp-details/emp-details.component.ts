import { Component, OnInit } from '@angular/core';
import { EmpDetailsService } from 'backend/emp-details.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private emp:EmpDetailsService){
  }

  

    ngOnInit() {  this.emp.geturlData().subscribe(
      (data)=>{
        this.url_data=data;
        
        console.log('Data is ',this.url_data)
      })
    }
    
    
    url_data : any
  }

    
  





