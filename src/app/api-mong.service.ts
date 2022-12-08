import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
@Injectable({
  providedIn: 'root'
})
export class ApiMongService {

  constructor(private http:HttpClient) { }
  url="http://localhost:4000/user"
  url_mongo="http://localhost:4000/empdetails"
  url_mongo_search="http://localhost:4000/searchemp"

  geturl(){
    return this.http.get(this.url)
  }

 getmongodata() {
  return this.http.get(this.url_mongo)
 }
 getmongo_searchdata(dept:any) {
  console.log(dept)
  return this.http.get(`${this.url_mongo_search}/${dept}`)
 }

 savemongostd(){
  return this.http.post('http://localhost:4000/adduser','data')
 }
 

url_del="http://localhost:4000/delprod"

delMongoProd(id:any) {
  return this.http.delete(`${this.url_del}/${id}`)
}


url_up="http://localhost:4000/products"
uppro(id:any, data:any){

  return this.http.put(`${this.url_up}/${id}`,data)

}

addemp(formdata:any){
  return this.http.post('http://localhost:4000/adduser',formdata)
}



}
