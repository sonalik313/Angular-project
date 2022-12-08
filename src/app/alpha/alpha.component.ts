import { Component, OnInit } from '@angular/core';
import { AlphaService } from '../alpha.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  constructor(private std:AlphaService) { }

  ngOnInit(): void {
    this.get_mystd();
  }
my_std:any;
get_mystd()
{
  this.my_std=this.std.get_stddt()
}
}
