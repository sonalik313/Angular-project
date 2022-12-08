import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit {

  constructor(private ur:UrlService) { }

  ngOnInit(): void {
    this.ur.geturlData().subscribe((data)=>{this.url_data=data})
  }
  url_data:any;

}
