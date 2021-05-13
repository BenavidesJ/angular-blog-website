import { Component, OnInit } from '@angular/core';
import { Posts } from '../interfaces/posts.interface';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-blog-posts-list',
  templateUrl: './blog-posts-list.component.html',
  styleUrls: ['./blog-posts-list.component.css']
})
export class BlogPostsListComponent implements OnInit {

  public posts:Posts[];

  constructor(public postService:PostsService) {
    const postObservable$ = this.postService.getPostsFromApi();
    postObservable$.subscribe((result)=>{
      console.log('obteniendo los posts', result);
      this.posts = result;
    })
   }

  ngOnInit(): void {
  }

}
