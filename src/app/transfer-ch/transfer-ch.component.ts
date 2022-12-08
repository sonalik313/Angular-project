import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transfer-ch',
  templateUrl: './transfer-ch.component.html',
  styleUrls: ['./transfer-ch.component.css']
})
export class TransferChComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Output() numInc = new EventEmitter();
@Output() valInc = new EventEmitter();
@Output() valdec = new EventEmitter();

oninc_ch(){
  this.numInc.emit()
}

// oninc_ch2(){
//   this.numInc.emit()
// }

valin:any;
on_val_inc_ch(){
  this.valin = Number(this.valin)
  this.valInc.emit(this.valin)
}

valde:any;
on_val_dec_ch(){
  this.valde = Number(this.valde)
  this.valdec.emit(this.valde)
}


}
