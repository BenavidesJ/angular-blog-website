import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './interfaces/users.interface';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  public getUsersFromApi(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  public getUserCard(id: string): Observable<any> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users/${id}`,
    { observe: 'body', responseType: 'json' });
  }
}