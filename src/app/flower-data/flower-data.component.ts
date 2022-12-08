import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-flower-data',
  templateUrl: './flower-data.component.html',
  styleUrls: ['./flower-data.component.css']
})
export class FlowerDataComponent implements OnInit {

  constructor(private fk:FlowerService) { }

  ngOnInit(): void {
  }
Qty:any;
Name:any;
Clr:any;

Onsave()
{
 this.fk.saveflower({ Qt:this.Qty, f_Name:this.Name,Color:this.Clr})
}
}
