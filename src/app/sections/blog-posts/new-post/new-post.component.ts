import { Component, OnInit } from '@angular/core';
import { User } from '../../users/interfaces/users.interface';
import { Posts } from '../interfaces/posts.interface';
import { UsersService } from '../../users/users.service';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  public users:User[];
  public post: Posts[];
  public userId:number = 0;
  public id:number;
  public title:string;
  public body:string;

 


  constructor(public userService: UsersService,public postService: PostsService) { 
    
    const userObservable$ = this.userService.getUsersFromApi();
    userObservable$.subscribe((result)=>{
      this.users = result;
    });
    /*
    const postObservable$ = this.postService.getPostsFromApi();
    postObservable$.subscribe((result)=>{
      this.post = result;
    })
    */

    const postsObservable$ = this.postService.getPostsFromApi();
    postsObservable$.subscribe((post) => {
      console.log("Servicio Creado", post);
      this.post = post;
    },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("Completed")
      }
    );
  }

  ngOnInit(): void {
  }


  submitPost(){
    
    const newPost:Posts = {
      userId: this.userId,
      id: 0,
      title: this.title,
      body: this.body,
    }
    console.log('nuevo objeto creado' , newPost)
    this.postService.getPostsFromApi();
    
  }

  
}
