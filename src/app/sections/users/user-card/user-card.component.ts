import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from '../../blog-posts/interfaces/posts.interface';
import { PostsService } from '../../blog-posts/posts.service';
import {User} from '../interfaces/users.interface';
import {UsersService} from '../users.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent{


  public posts:Posts[] = [];
  public user?: User;
  public userID:string;
  public userIDSubscription:string;
  public currentUrl:string;


  constructor(
    private postService: PostsService,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
  ) 
  { }

  ngOnInit(): void {

    this.userID =this.route.snapshot.params.id;
    this.route.paramMap.subscribe(params => {
      this.userIDSubscription = params.get("id")
    });

    this.router.events.subscribe(() =>{
      this.currentUrl = this.router.url;
    })

    this.currentUrl = this.router.url;
  

    this.usersService.getUserCard(this.userID).subscribe(
      (data) => {
        this.user = data;
      },
      () => {
        
      },
      () => {
        console.log('Completed');
      }
    );

    this.postService.getUserPost(this.userID).subscribe(
      (data) => {
        this.posts = data;
      },
      () => {
        
      },
      () => {
        console.log('Completed');
      }
    );

  }

  
}
