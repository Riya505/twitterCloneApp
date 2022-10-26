import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-my-tweets',
  templateUrl: './view-my-tweets.component.html',
  styleUrls: ['./view-my-tweets.component.css']
})
export class ViewMyTweetsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetch()
  }
 
  fetch=()=>{
    let data={
      "user_id":localStorage.getItem("id")
    }
    console.log(data)
    this.myapi.myTweets(data).subscribe(
      (res)=>{
        this.data=res
        
      }
    )
  }
  
  data:any=[]

  ngOnInit(): void {
  }

}
