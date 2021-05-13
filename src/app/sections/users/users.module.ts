import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './user-card/user-card.component';
import { UserRelatedPostComponent } from './user-related-post/user-related-post.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent,
    UserRelatedPostComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ]
})
export class UsersModule { }
