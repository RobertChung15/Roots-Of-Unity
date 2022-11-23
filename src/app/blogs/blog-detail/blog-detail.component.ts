import { Component, OnInit } from '@angular/core';
import { BlogsModule } from '../blogs.module';
import { getFirestore, Firestore, getDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { ActivatedRoute } from '@angular/router';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authservice.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  db = getFirestore();
  post=<any>[];
  faPencil = faPencil;
  editing: boolean = false;
  update: string = "";
  logged: Boolean = false;

  constructor(public route: ActivatedRoute, public router: Router, public authservice: AuthserviceService) { 
    this.getBlog();
  }

  ngOnInit(): void {
    this.authservice.loggedInStatusChange().subscribe(loggedIn => {
      console.log(loggedIn);
      this.logged = loggedIn;
    })
  }
  
  getBlog(){
    let id:string = this.route.snapshot.paramMap.get("id") || "";
    const colRef = doc(this.db, "Posts", id);
    getDoc(colRef).then((doc) =>{
      this.post = doc.data();
    });
  }

  editingPost(){
    this.editing = true;
  }

  updatePost(){
    let id:string = this.route.snapshot.paramMap.get("id") || "";
    const colRef = doc(this.db, "Posts", id);
    const data = {
      title: this.post.title,
      content: this.post.content
    };
    updateDoc(colRef, data).then((res) =>{
      console.log("updated");
    })
    this.editing = false;
  }


  deletePost(){
    let id:string = this.route.snapshot.paramMap.get("id") || "";
    const colRef = doc(this.db, "Posts", id);
    deleteDoc(colRef).then((res) =>{
      this.router.navigate(['blog']);
    })
  }
}
