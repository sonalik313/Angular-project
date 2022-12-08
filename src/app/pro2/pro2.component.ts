import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProService } from '../pro.service';

@Component({
  selector: 'app-pro2',
  templateUrl: './pro2.component.html',
  styleUrls: ['./pro2.component.css']
})
export class Pro2Component implements OnInit {

  constructor(private pr:ProService,private acr:ActivatedRoute) { }

  ngOnInit(): void {
    this.pr.geturlData().subscribe((data)=>{this.url_data=data})
  
  this.acr.params.subscribe((para)=>{this.url_id=para['id']})

this.pr.getnodedata().subscribe((data)=>{this.node_data=data})


  }
  url_data:any;
  url_id:any;
  node_data:any

}
