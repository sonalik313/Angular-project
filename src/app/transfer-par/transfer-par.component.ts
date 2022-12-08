import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-par',
  templateUrl: './transfer-par.component.html',
  styleUrls: ['./transfer-par.component.css']
})
export class TransferParComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

num=5;

oninc_par()
{
  this.num+=1
}
// oninc_par2(){
//   this.num-=1
// }

oninc_par_val(v:any)
{
  this.num+=v
}
ondec_par_val(v:any)
{
  this.num-=v
}

}
