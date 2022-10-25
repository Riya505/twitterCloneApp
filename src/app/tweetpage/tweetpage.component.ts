import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tweetpage',
  templateUrl: './tweetpage.component.html',
  styleUrls: ['./tweetpage.component.css']
})
export class TweetpageComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  name=localStorage.getItem("name")
  post=""
  readValue=()=>{
    let data={
      "user_id":localStorage.getItem("id"),
      "post":this.post
    }
    console.log(data)
    this.myapi.addPost(data).subscribe(
      (resp)=>{

      }
    )
    this.post=""
  }
  fetchData=()=>{
    this.myapi.viewPosts().subscribe(
      (data)=>{
        this.data=data
      }
    )
  }

 
  data:any=[]

  ngOnInit(): void {
  }

}
