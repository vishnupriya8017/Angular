import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private router:Router,private dataservice:DataService,private fb:FormBuilder) { }

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
    if(this.loginForm.valid){
      var acno=this.loginForm.value.acno;
    
      var pswd=this.loginForm.value.pswd;
      const result= this.dataservice.login(acno,pswd)
      
          if ( result) {
            alert("login Success");
            this.router.navigateByUrl("dashboard");
          }

    }
    else{
      alert("invalid form")
    }
   

  }
  register(){
    this.router.navigateByUrl("register");
  }

}
