import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMongService } from '../api-mong.service';

@Component({
  selector: 'app-api-mong',
  templateUrl: './api-mong.component.html',
  styleUrls: ['./api-mong.component.css']
})
export class ApiMongComponent implements OnInit {

  constructor(private ser:ApiMongService, private route :Router) { }

  ngOnInit(): void {
    // this.ser.geturl().subscribe(
    //   (data)=>{
    //     this.url_data=data;
    //     console.log(data)
    //   }
    // )
    this.ser.getmongodata().subscribe(
      (data)=>{
        this.url_mongo_data=data;
        console.log(data)
      }
    )
  }
url_data:any;

url_mongo_data:any;

onDel(id:any){
  this.ser.delMongoProd(id).subscribe(
    (msg)=>{console.log(msg)}
  )
}

onEdit(id:any){

this.route.navigate(['/updform',id])
}
searchme_name:any
search_mongo_data:any
searchme(){
this.ser.getmongo_searchdata(this.searchme_name).subscribe(
  (data)=>{this.search_mongo_data=data}
)
}
}
