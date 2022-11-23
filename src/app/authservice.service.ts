import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private loggedIn: Subject<boolean> = new ReplaySubject<boolean>(1);

  constructor(public auth: Auth) { }

  signUpService(email: string, password: string, displayName: string){
    createUserWithEmailAndPassword(this.auth, email, password).then((res) =>{
      updateProfile(res.user, {
        displayName: displayName
      });
    }).catch((err) =>{
      console.log(err);
    });
  }

  loginService(email: string, password: string){
    this.loggedIn.next(true);
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signOutService(){
    this.loggedIn.next(false);
    signOut(this.auth);
  }

  getUser(){
    return this.auth.currentUser;
  }

  loggedInStatusChange(): Observable<Boolean>{
    return this.loggedIn.asObservable();
  }

}
