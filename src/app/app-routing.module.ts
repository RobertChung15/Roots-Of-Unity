import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDashboardComponent } from './blogs/blog-dashboard/blog-dashboard.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"gallery",
    component: GalleryComponent
  },
  {
    path:"blog",
    component: BlogListComponent
  },
  {
    path:"blog/:id",
    component: BlogDetailComponent
  },
  {
    path:"dashboard",
    component:BlogDashboardComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
