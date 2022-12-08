import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExComponent } from './ex-1/ex-1.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login/login2/login2.component';
import { StructureNgForComponent } from './structure-ng-for/structure-ng-for.component';
import { StructNgIfComponent } from './struct-ng-if/struct-ng-if.component';
import { NewheadComponent } from './newhead/newhead.component';
import { HomeComponent } from './home/home.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import{HttpClientModule } from '@angular/common/http';
import { Api1Component } from './api1/api1.component';
import { Pro1Component } from './pro1/pro1.component';
import { Pro2Component } from './pro2/pro2.component';
import { TransferParComponent } from './transfer-par/transfer-par.component';
import { TransferChComponent } from './transfer-ch/transfer-ch.component';
import { OutChComponent } from './out-ch/out-ch.component';
import { OutParComponent } from './out-par/out-par.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { FlowerDataComponent } from './flower-data/flower-data.component';
import { Login3Component } from './login3/login3.component';
import { Home3Component } from './home3/home3.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ApiMongComponent } from './api-mong/api-mong.component';
import { Crud1Component } from './crud1/crud1.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmpdetailsPostComponent } from './empdetails-post/empdetails-post.component';

import { WildcardComponent } from './wildcard/wildcard.component';
import { DigiAssignmentComponent } from './digi-assignment/digi-assignment.component';
import { BarComponent } from './bar/bar.component'
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ExComponent,
    LoginComponent,
    Login2Component,
    StructureNgForComponent,
    StructNgIfComponent,
    NewheadComponent,
    HomeComponent,
    WildcardComponent,
    C1Component,
    C2Component,
    AlphaComponent,
    BetaComponent,
    Api1Component,
    Pro1Component,
    Pro2Component,
    TransferParComponent,
    TransferChComponent,
    OutChComponent,
    OutParComponent,
    FlowerListComponent,
    FlowerDataComponent,
    Login3Component,
    Home3Component,
    HeaderComponent,
    MovieComponent,
    ReactiveFormComponent,
    ApiMongComponent,
    Crud1Component,
    EmployeedashboardComponent,
    EmpdetailsPostComponent,
    DigiAssignmentComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
