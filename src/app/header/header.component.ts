import { Component, HostListener, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarFixed:boolean = false;
  logged: Boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll(){
    if(window.scrollY > 100){
      this.navbarFixed = true;
    }else{
      this.navbarFixed = false;
    }
  }

  constructor(public authservice: AuthserviceService) {
  }

  ngOnInit(): void {
    this.authservice.loggedInStatusChange().subscribe(loggedIn => {
      console.log(loggedIn);
      this.logged = loggedIn;
    })
  }


  toggleMenu(){
    var burger = document.querySelector('.navbar-burger');
    var navMenu = document.querySelector('.navbar-menu');
    console.log(burger);
    burger?.classList.toggle("is-active");
    navMenu?.classList.toggle("is-active");
  }
}
