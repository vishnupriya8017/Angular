import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname="";
  acno="";
  pswd="";

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private dataservice:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    //console.log(this.registerForm);
    //alert("register clicked");
    
    if(this.registerForm.valid){
      //alert("Form Valid")
      var uname=this.registerForm.value.uname;
      var acno=this.registerForm.value.acno;
      var pswd=this.registerForm.value.pswd;
  
      console.log(uname,acno,pswd);
  
      const result=this.dataservice.register(uname,acno,pswd);
      if(result){
        alert("Account Created");
        this.router.navigateByUrl("");
  
      }
      else{
        alert("User exist...please login");
      }
      

    }
    else{
      alert("Invalid Form")
    }
   
  }

}
