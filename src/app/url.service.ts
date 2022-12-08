import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http:HttpClient) { }
  url="https://jsonplaceholder.typicode.com/users"
  geturlData()
  {
    return this.http.get(this.url)
  }
}
