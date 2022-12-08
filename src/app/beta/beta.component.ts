import { Component, OnInit } from '@angular/core';
import { AlphaService } from '../alpha.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  constructor(private std:AlphaService) { }

  ngOnInit(): void {
  }
  std_name:any;
std_id:any;
std_dept:any;

onstd()
{
  this.std.save_std({ Id:this.std_id, Name:this.std_name, Dept:this.std_dept})

}
}