import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphaComponent } from './alpha/alpha.component';
import { ApiMongComponent } from './api-mong/api-mong.component';
import { Api1Component } from './api1/api1.component';
import { BarComponent } from './bar/bar.component';
import { BetaComponent } from './beta/beta.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { Crud1Component } from './crud1/crud1.component';
import { DigiAssignmentComponent } from './digi-assignment/digi-assignment.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpdetailsPostComponent } from './empdetails-post/empdetails-post.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { FirstComponent } from './first/first.component';
import { FlowerDataComponent } from './flower-data/flower-data.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Home3Component } from './home3/home3.component';
import { LoginComponent } from './login/login.component';
import { Login3Component } from './login3/login3.component';
import { MovieComponent } from './movie/movie.component';
import { PieComponent } from './pie/pie.component';
import { Pro1Component } from './pro1/pro1.component';
import { Pro2Component } from './pro2/pro2.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ScatterComponent } from './scatter/scatter.component';
import { TransferChComponent } from './transfer-ch/transfer-ch.component';
import { TransferParComponent } from './transfer-par/transfer-par.component';


import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"first", component:FirstComponent},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"c1", component:C1Component},
  {path:"c2", component:C2Component},
  {path:"alpha",component:AlphaComponent},
  {path:"beta",component:BetaComponent},
  {path:"api1",component:Api1Component},
  {path:"pro1",component:Pro1Component},
  {path:"transpar",component:TransferParComponent},
  {path:"transch",component:TransferChComponent},
  {path:"product/:id",component:Pro2Component},
  {path:"flower_list",component:FlowerListComponent},
  {path:"flower_data",component:FlowerDataComponent},
  {path:"home3",component:Home3Component},
  {path:"movie",component:MovieComponent},
  {path:"login3",component:Login3Component},
  {path:"header",component:HeaderComponent},
  {path:"api_mong",component:ApiMongComponent},
  {path:"updform/:id",component:ReactiveFormComponent},
  {path:"crud1",component:Crud1Component},
  {path:"employeedashboard",component:EmployeedashboardComponent},
  {path:"emp-details",component:EmpDetailsComponent},
  {path:"empdetails-post",component:EmpdetailsPostComponent},
  {path:"digi-assignment",component:DigiAssignmentComponent},
  {path:"bar",component:BarComponent},
  {path:"pie",component:PieComponent},
  {path:"scatter",component:ScatterComponent},

  {path:"**",component:WildcardComponent}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
