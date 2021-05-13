import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostsListRoutingModule } from './blog-posts-list-routing.module';
import { BlogPostsListComponent } from './blog-posts-list.component';


@NgModule({
  declarations: [
    BlogPostsListComponent
  ],
  imports: [
    CommonModule,
    BlogPostsListRoutingModule
  ]
})
export class BlogPostsListModule { }
