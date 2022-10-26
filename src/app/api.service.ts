import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  signupData=(data:any)=>{
    return this.http.post("http://localhost:8080/userData",data)
  }
  login=(data:any)=>{
    return this.http.post("http://localhost:8080/login",data)
  }
  viewPosts=()=>{
    return this.http.get("http://localhost:8080/viewposts")
  }
  addPost=(data:any)=>{
    return this.http.post("http://localhost:8080/addposts",data)
  }
  myTweets=(data:any)=>{
    return this.http.post("http://localhost:8080/single",data)
  }
}
