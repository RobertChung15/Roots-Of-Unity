import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { BlogsModule } from '../blogs.module';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.css']
})
export class BlogDashboardComponent implements OnInit {
  db = getFirestore();
  title: string="";
  author: string="";
  content: string="";
  buttonText: string="Create Post";
  galleryText: string="Submit Picture";
  image: string = "";
  path: any = {};
  progress: any;
  subPic: boolean = false;
  subPost: boolean = false;
  timeStamp: number = 0;

  constructor(public storage: Storage) { 
    
  }

  ngOnInit(): void {

  }

  getImage(){
    if(this.timeStamp){
      return this.image + "?" + this.timeStamp;
    }
    return this.timeStamp;
  }

  public setImage(url: string){
    this.image = url;
    this.timeStamp = (new Date()).getTime();
  }

  colref = collection(this.db, "Posts");
  colrefGallery = collection(this.db, "gallery");

  onSubmit(form: NgForm){
    if(this.subPost == true){
      this.createPost(form);
    }
    else if(this.subPic == true){
      this.createGalleryPost(form);
    }
  }

  submitPost(){
    this.subPost = true;
  }

  submitGalleryPic(){
    this.subPic = true;
  }

  createPost(form: NgForm){
    const data = {
      title: this.title,
      content: this.content,
      image: this.image,
      published: new Date()
    };
    addDoc(this.colref, data);
    form.resetForm();
  }

  createGalleryPost(form: NgForm){
    const data = {
      downloadUrl: this.image,
      published: new Date()
    };
    addDoc(this.colrefGallery, data);
    form.resetForm;
    console.log("Done");
  }

  uploadImage(event: any){
    this.path = event.target.files[0];
    const storageRef = ref(this.storage, 'images/' + this.path.name);
    const uploadTask = uploadBytesResumable(storageRef, this.path);
    uploadTask.on('state_changed', (snapshot) =>{
      this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) =>{
        this.setImage(downloadUrl);
        console.log(downloadUrl);
      });
    });
  }
}
