import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string="";
  email:string = "";
  message:string ="";
  db = getFirestore();
  colref = collection(this.db, "contactPage");


  constructor() { }

  ngOnInit(): void {}

  submitForm(form: NgForm){
    const words = `my name is ${this.name} ${this.email} ${this.message}`;
    alert(words);
    const data = {
      fullName: this.name,
      email: this.email,
      message: this.message
    };
    addDoc(this.colref, data);
    form.reset();
  }
}
