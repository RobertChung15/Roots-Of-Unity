import { Component, OnInit } from '@angular/core';
import { faPencil, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faPencil = faPencil;
  faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

  

}
