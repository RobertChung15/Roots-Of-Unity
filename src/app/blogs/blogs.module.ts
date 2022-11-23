import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    BlogDashboardComponent,
    BlogListComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogsModule { }
