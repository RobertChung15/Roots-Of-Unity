import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  displayName: string = "";
  text: string="";
  user: any;
  loggedIn: boolean = false;

  constructor(public auth: Auth, public authservice: AuthserviceService) { }

  ngOnInit(): void {
  }

  signUp(){
    //this can return a promise
    this.authservice.signUpService(this.email, this.password, this.displayName);
  }

  login(){
    this.authservice.loginService(this.email, this.password).then((res) => {
      this.loggedIn = true;
      this.user = this.authservice.getUser();
    });
  }

  logout(){
    this.authservice.signOutService();
  }

  

}
