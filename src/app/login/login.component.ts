import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Login Form";

  acno="";

  pswd="";

  

  constructor(private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }

  //accnoChange(event: any){
  //  this.accno=event.target.value;
  //  console.log(this.accno);
    // }


 // pswdChange(event: any){
  //  this.pswd=event.target.value;
  //  console.log(this.pswd);
    
    
  //}

  login(){
    
    var acno=this.acno;
    var pswd=this.pswd;
    let users = this.dataservice.accountDetails
    if (acno in users) {
        if ( pswd == users[acno]["password"]) {
          alert("login Success");
          this.router.navigateByUrl("dashboard");
        }
        else {
          alert("Incorrect Password");
        }

    }
    else {
      alert("Invalid Account");
    }

  }
  register(){
    this.router.navigateByUrl("register");
  }

}
