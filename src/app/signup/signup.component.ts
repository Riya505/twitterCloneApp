import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  dob=""
  phone=""
  place=""
  email=""
  password=""
  conformpass=""

  readvalue=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phone":this.phone,
      "place":this.place,
      "email":this.email,
      "password":this.password,
      "conformpass":this.conformpass
    }
    console.log(data)
    this.myapi.signupData(data).subscribe(
      (response)=>{
        console.log(response)
        alert("successfully added")
      }
    )
  }


  ngOnInit(): void {
  }

}
