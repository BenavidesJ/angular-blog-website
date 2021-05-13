import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostsListComponent } from './sections/blog-posts/blog-posts-list/blog-posts-list.component';
import { NewPostComponent } from './sections/blog-posts/new-post/new-post.component';
import { MainComponent } from './sections/main/main.component';
import { UsersComponent } from './sections/users/users.component';
import { UserCardComponent } from './sections/users/user-card/user-card.component';
import { CommentsComponent } from './sections/blog-posts/comments/comments.component';

const routes: Routes = [ 
  { path: 'users', component:UsersComponent},
  { path: 'user-card/:id', component: UserCardComponent },
  { path: 'comments/:id', component: CommentsComponent }, 
  { path: 'blog-posts-list', component:BlogPostsListComponent }, 
  { path: 'new-post', component:NewPostComponent}, 
  { path: '', component:MainComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
