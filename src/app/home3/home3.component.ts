import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  trendingMovies:any;
  theatreMovies:any;
  popularMovies:any;
  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }
  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies)=>
    {this.trendingMovies=movies;})

  }
  getTheatreMovies(){
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies)=>
    {this.theatreMovies=movies;})

  }
  getPopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies)=>
    {this.popularMovies=movies;})

  }
  goToMovie(type:string,id:string){
    this.router.navigate(['movie',type,id]);
  }
}
