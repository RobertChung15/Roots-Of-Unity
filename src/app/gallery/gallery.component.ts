import { Component, OnInit } from '@angular/core';
import { collection, getDocs, getFirestore } from "firebase/firestore";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  db = getFirestore();
  colref = collection(this.db, "gallery");
  imageArray = <any>[];

  constructor() {
    this.getImages();
   }

  ngOnInit(): void {
  }

  getImages(){
    getDocs(this.colref).then((snapshot) => {
      snapshot.docs.forEach((doc) =>{
        this.imageArray.push({...doc.data(), id: doc.id})
      });
    }).catch(function(err){
      console.log(err);
    });
  }

}
