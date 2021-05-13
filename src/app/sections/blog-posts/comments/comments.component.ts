import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../users/interfaces/users.interface';
import { UsersService } from '../../users/users.service';
import { Posts } from '../interfaces/posts.interface';
import {PostsService} from '../posts.service';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public users: User[];
  public posts: Posts;
  public comments: Comment[] = [];
  
  public postId: string;
  public postIdSubscrip: string;
  public currentUrl: string;

  constructor(
    private userService: UsersService,
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute
    ) 
    { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params.id;
    this.route.paramMap.subscribe(params => {
      this.postIdSubscrip = params.get('id');
    });

    this.currentUrl = this.router.url;

    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });

    this.postService.getPostComment(this.postId).subscribe(
      (data) =>{
        this.comments = data;

      },
      (err) => {
        console.log(err)
      },
      () => {
        console.log('Completed')
      }
    );

    this.postService.getUserPost(this.postId).subscribe(
      (data) => {
        this.posts = data;
        
      },
      (err) => {
        console.error('Error:', err);
      },
      () => {
        console.log('Completed');
      }
    );

    this.userService.getUserCard(this.postId).subscribe(
      (data) => {
        this.users = data;
        console.log('Data:', data);
      },
      (err) => {
        console.error('Error:', err);
      },
      () => {
        console.log('Completed');
      }
    );


  }

}
