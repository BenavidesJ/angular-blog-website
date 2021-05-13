import { Component, OnInit } from '@angular/core';
import { Posts} from '../blog-posts/interfaces/posts.interface';
import { PostsService } from '../blog-posts/posts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public latestPosts:Posts [];

  constructor(public postService:PostsService) {
    const postObservable$ = this.postService.getPostsFromApi();
    postObservable$.subscribe((result)=>{
      
      this.latestPosts = result;
    })
   }

  ngOnInit(): void {
  }

}
