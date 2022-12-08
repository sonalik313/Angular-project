import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProService } from '../pro.service';

@Component({
  selector: 'app-pro1',
  templateUrl: './pro1.component.html',
  styleUrls: ['./pro1.component.css']
})
export class Pro1Component implements OnInit {

  constructor(private pr:ProService,private route:Router) { }

  ngOnInit(): void {
    this.pr.geturlData().subscribe((data)=>{this.url_data=data})
  }
  url_data:any;
  onRou(i:any)
  {
    this.route.navigate(['/product',i])
  }
  }


