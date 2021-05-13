import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './sections/users/users.component';

import { MainComponent } from './sections/main/main.component';
import { BlogPostsListComponent } from './sections/blog-posts/blog-posts-list/blog-posts-list.component';
import { NewPostComponent } from './sections/blog-posts/new-post/new-post.component';
import {FormsModule} from '@angular/forms';
import { UserCardComponent } from './sections/users/user-card/user-card.component';
import { CommentsComponent } from './sections/blog-posts/comments/comments.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    MainComponent,
    BlogPostsListComponent,
    NewPostComponent,
    UserCardComponent,
    CommentsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
