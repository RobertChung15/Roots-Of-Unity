import { Component, OnInit } from '@angular/core';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { BlogsModule } from '../blogs.module';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  postArray = <any>[];
  db = getFirestore();

  constructor() {
    this.getPosts();
  }

  colref = collection(this.db, "Posts");
  getPosts(){
      getDocs(this.colref).then((snapshot) => {
        snapshot.docs.forEach((doc) =>{
          this.postArray.push({...doc.data(), id: doc.id})
        });
      }).catch(function(err){
        console.log(err);
      });
  }

  ngOnInit(): void {
    
  }

}
