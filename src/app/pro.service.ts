import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProService {

  constructor(private http:HttpClient) { }
  url="https://fakestoreapi.com/products"

  geturlData()
  {
    return this.http.get(this.url)
  }


getnodedata()
{
  return this.http.get('http://localhost:3000/users')
}

}
