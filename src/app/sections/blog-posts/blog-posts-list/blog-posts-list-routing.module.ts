import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostsListComponent } from './blog-posts-list.component';

const routes: Routes = [{ path: '', component: BlogPostsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPostsListRoutingModule { }
