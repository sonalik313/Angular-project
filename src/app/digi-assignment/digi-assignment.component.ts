import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-digi-assignment',
  templateUrl: './digi-assignment.component.html',
  styleUrls: ['./digi-assignment.component.css']
})
export class DigiAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newadd(){

  }
//   newadd()
//   {
//     this.connections.enter().append("path")  
//     .attr("d",function(d){
//      return "M" + d.source.x + "," + d.source.y + " v 50  H" +
//      d.target.x +" V " +d.target.y;
//     }) ;

//     this.rectangles.enter().append("rect")
// .attr("x", function(d){return d.x-40;})
// .attr("y", function(d){return d.y-20;});

// this.names.enter().append("text")     
//           .text(function(d){return d.data.child;})
//           .attr("x", function(d){return d.x;})
//           .attr("y", function(d){return d.y;})
//           .classed("bigger", true);
               
//   }
  
//    svg=d3.select("body").append("svg")
//   .attr("width", 900).attr("height",600)
//   .append("g").attr("transform","translate(50,50)");
//  data =[{"child":"John", "parent":""},
//     {"child":"Aarohi", "parent":"Kalpit"},
//     {"child":"Kalpit", "parent":"John"},
//     {"child":"Hari", "parent":"Anil"},
//     {"child":"Reva", "parent":"Sara"},
//     {"child":"Anil", "parent":"John"},
//     {"child":"Sara", "parent":"Kalpit"},
//     {"child":"Mark", "parent":"Anil"},
//     {"child":"Angel", "parent":"Sara"},
//     {"child":"Tom", "parent":"Hari"}
// ] ;

//  dataStructure = d3.stratify().id((d1)=>{return d1.child})
//                  .parentId((d)=>{return d.parent;})
//                  (this.data);
//  treeStructure = d3.tree().size([650,300]);
//  information = this.treeStructure(this.dataStructure);
// // console.log(information.descendants());
// // console.log(information.links());

//  connections = this.svg.append("g").selectAll("path")
//                 .data(this.information.links());

// rectangles= this.svg.append("g").selectAll("rect")
//           .data(this.information.descendants());


//  names = this.svg.append("g").selectAll("text")
//             .data(this.information.descendants()) ;









}
