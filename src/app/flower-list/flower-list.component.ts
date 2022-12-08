import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent implements OnInit {

  constructor(private fk:FlowerService) { }

  ngOnInit(): void {
    this.db=this.fk.dbdata
  }
db:any;
}
