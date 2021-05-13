import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from './interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public posts:Posts[] = [];
  constructor(public http: HttpClient) { }

  public getPostsFromApi(){
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public getUserPost(id: string): Observable<any> {
    return this.http.get<Posts[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`,{ observe: 'body', responseType: 'json' });
  }

  public getPostComment(id: string): Observable<any>{
    const urlData = new HttpParams().set('postId', id);
    return this.http.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/comments',
      { params: urlData }
    );
  }
}
