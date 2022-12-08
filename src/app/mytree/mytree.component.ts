import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { select, Selection, selectAll } from "d3-selection";
import { hierarchy, HierarchyNode, tree } from "d3-hierarchy";
import "d3-transition";

// import { data } from "../data"

// @Component({
//   selector: 'app-mytree',
//   templateUrl: './mytree.component.html',
//   styleUrls: ['./mytree.component.css']
// })


// export class MytreeComponent implements OnInit {

//   @ViewChild("svg", { static: true })
//   svgRef!: ElementRef;
//   @ViewChild("dataBoxRef", { static: true })
//   dataBoxRef!: ElementRef;

//   svg: Selection<any, unknown, null, undefined> | undefined;
//   globalG: any;
//   svgConfig: any = {
//     svgWidth: 500,
//     svgHeight: 500,
//     margin: { top: 20, right: 80, bottom: 30, left: 80 },
//     width: 1000 - 60,
//     height: 250
//   };
//   marginSum = 160;

//   constructor() {}

//   ngOnInit(): void {
//     this.setupChart(data);
//   }

//   setupChart(nodeData:any) {
//     this.svg = select(this.svgRef.nativeElement)
//       .attr("width", this.svgConfig.svgWidth)
//       .attr("height", this.svgConfig.svgHeight)
//       .attr(
//         "viewBox",
//         `0 0 ${this.svgConfig.width + this.marginSum} ${
//           this.svgConfig.svgHeight
//         }`
//       );

//     const root = hierarchy(nodeData);
//     const treeLayout = tree();
//     treeLayout.size([this.svgConfig.svgWidth, this.svgConfig.svgHeight]);

//     treeLayout(root);

//     // Nodes
//     const nodes = select("svg g.nodes")
//       .selectAll("circle.node")
//       .data(root.descendants());

//     const nodeEnter = nodes.enter();
//     nodeEnter
//       .append("circle")
//       .classed("node", true)
//       .attr("r", 10)
//       .attr("fill", "steelblue")
//       .attr("transform", () => `translate(0 ${this.svgConfig.svgHeight / 2})`)
//       .on("mouseover", function(e, d) {
//         debugger;
//         const validNodes = d.descendants();
//         const validIds = validNodes.map(dd => getId(dd));
//         selectAll("circle.node").style("fill", function(nn:any) {
//           const nnId = getId(nn);
//           return validIds.includes(nnId) ? "red" : "steelblue";
//         });

//         console.log(links);
//         links.style("stroke", function(link:any) {
//           const sourceId = getId(link.source);
//           const targetId = getId(link.target);
//           return d
//             .links()
//             .find(
//               l => getId(l.source) === sourceId && getId(l.target) === targetId
//             )
//             ? "red"
//             : "steelblue";
//         });
//       })
//       .on("mouseout", function() {
//         selectAll("circle.node").style("fill", "steelblue");
//         links.style("stroke", "steelblue");
//       });

//     nodeEnter
//       .append("text")
//       .attr("x", d => d.y + 30)
//       .attr("y", d => d.x - 5)
//       .attr("dy", ".35em")
//       .attr("text-anchor", () => "start")
//       .text(d => `${d.data.name}`)
//       .style("fill-opacity", 1);

//     const nodeUpdate = selectAll("circle.node")
//       .transition()
//       .duration(750)
//       .attr("transform", d => `translate(${d.y} ${d.x})`);

//     nodeUpdate
//       .select("circle")
//       .attr("r", 10)
//       .style("fill", function(d) {
//         return d.endNode ? "orange" : "lightsteelblue";
//       });

//     nodeUpdate.select("text").style("fill-opacity", 1);

//     const nodeExit = nodes
//       .exit()
//       .transition()
//       .duration(750)
//       .attr("transform", function(d) {
//         return "translate(" + 0 + "," + 0 + ")";
//       })
//       .remove();

//     nodeExit.select("circle").attr("r", 1e-6);
//     nodeExit.select("text").style("fill-opacity", 1e-6);

//     // Links
//     // const links = select("svg g.links")
//     //   .selectAll("line.link")
//     //   .data(root.links())
//     //   .enter()
//     //   .append("line")
//     //   .classed("link", true)
//     //   .attr("x1", d => d.source.y + 10)
//     //   .attr("y1", d => d.source.x)
//     //   .attr("x2", d => d.target.y)
//     //   .attr("y2", d => d.target.x)
//     //   .attr("stroke-width", "2px")
//     //   .attr("stroke", "steelblue");

//     console.log(root.links());
//     const links = selectAll("path");
//     // const links = select("svg g.links")
//     //   .selectAll("line.link")
//     //   .data(root.links())
//     //   .join("path")
//     //   .attr(
//     //     "d",
//     //     d => `
//     //     M${d.target.y},${d.target.x}
//     //     C${d.source.y + root.dy / 2},${d.target.x}
//     //      ${d.source.y + root.dy / 2},${d.source.x}
//     //      ${d.source.y},${d.source.x}
//     //   `
//     //   );
//     this.svg
//       .append("g")
//       .attr("fill", "none")
//       .selectAll("path")
//       .data(root.links())
//       .join("path")
//       .attr("stroke", "steelblue")
//       .attr("stroke-opacity", 0.4)
//       .attr("stroke-width", 1.5)
//       .attr(
//         "d",
//         d => `
//         M${d.target.y - 3},${d.target.x + 5}
//         C${d.source.y + 15},${d.target.x + 5}
//          ${d.source.y + 15},${d.source.x + 5}
//          ${d.source.y + 15},${d.source.x + 5}
//       `
//       );
//   }

//   store() {
//     this.svg = select(this.svgRef.nativeElement)
//       .attr("width", this.svgConfig.svgWidth)
//       .attr("height", this.svgConfig.svgHeight)
//       .attr(
//         "viewBox",
//         `0 0 ${this.svgConfig.width + this.marginSum} ${
//           this.svgConfig.svgHeight
//         }`
//       );

//     const root = hierarchy(data);
//     const treeLayout = tree();
//     treeLayout.size([this.svgConfig.svgWidth, this.svgConfig.svgHeight]);

//     treeLayout(root);

//     // Nodes
//     const nodes = select("svg g.nodes")
//       .selectAll("circle.node")
//       .data(root.descendants());

//     // const nodeEnter = nodes
//     // .enter()
//     // .append("circle")
//     // .classed("node", true)
//     // // .attr("cx", d => d.y + 10)
//     // // .attr("cy", d => d.x)
//     // .attr("r", 10)
//     // .attr("fill", "steelblue")
//     // .attr("transform", () => `translate(10 ${this.svgConfig.svgHeight / 2})`);
//     // .append("text")
//     // .attr("x", d => d.y)
//     // .attr("dy", ".35em")
//     // .attr("text-anchor", () => "start")
//     // .text(d => "test" + d.name)
//     // .style("fill-opacity", 1e-6);

//     const nodeEnter = nodes.enter();
//     nodeEnter
//       .append("circle")
//       .classed("node", true)
//       .attr("r", 10)
//       .attr("fill", "steelblue")
//       .attr("transform", () => `translate(10 ${this.svgConfig.svgHeight / 2})`);

//     nodeEnter
//       .append("text")
//       .attr("x", d => d.y)
//       .attr("y", d => d.x)
//       .attr("dy", ".35em")
//       .attr("text-anchor", () => "start")
//       .text(d => `${d.name} 1`)
//       .style("fill-opacity", 1);

//     const nodeUpdate = selectAll("circle.node")
//       .transition()
//       .duration(750)
//       .attr("transform", d => `translate(${d.y + 10} ${d.x})`);

//     nodeUpdate
//       .select("circle")
//       .attr("r", 10)
//       .style("fill", function(d) {
//         return d.endNode ? "orange" : "lightsteelblue";
//       });

//     nodeUpdate.select("text").style("fill-opacity", 1);

//     const nodeExit = nodes
//       .exit()
//       .transition()
//       .duration(750)
//       .attr("transform", function(d) {
//         return "translate(" + 0 + "," + 0 + ")";
//       })
//       .remove();

//     nodeExit.select("circle").attr("r", 1e-6);

//     nodeExit.select("text").style("fill-opacity", 1e-6);

//     nodes
//       .on("mouseover", function(e, d) {
//         const validNodes = d.descendants();
//         const validIds = validNodes.map(dd => getId(dd));
//         nodes.style("fill", function(nn) {
//           const nnId = getId(nn);
//           return validIds.includes(nnId) ? "red" : "steelblue";
//         });

//         links.style("stroke", link => {
//           const sourceId = getId(link.source);
//           const targetId = getId(link.target);
//           return d
//             .links()
//             .find(
//               l => getId(l.source) === sourceId && getId(l.target) === targetId
//             )
//             ? "red"
//             : "steelblue";
//         });
//       })
//       .on("mouseout", function() {
//         nodes.style("fill", "steelblue");
//         links.style("stroke", "steelblue");
//       });

//     // Links
//     const links = select("svg g.links")
//       .selectAll("line.link")
//       .data(root.links())
//       .enter()
//       .append("line")
//       .classed("link", true)
//       .attr("x1", d => d.source.y + 10)
//       .attr("y1", d => d.source.x)
//       .attr("x2", d => d.target.y)
//       .attr("y2", d => d.target.x)
//       .attr("stroke-width", "2px")
//       .attr("stroke", "steelblue");
//   }
// }
// function getId(dd: HierarchyNode<any>): any {
//   throw new Error("Function not implemented.");
// }

