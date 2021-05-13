import { Component, OnInit,} from '@angular/core';
import { User } from './interfaces/users.interface';
import { UsersService } from './users.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  public users:User[];

  constructor(public userService:UsersService,) { 
    const userObservable$ = this.userService.getUsersFromApi();
    userObservable$.subscribe((result)=>{
      console.log('obteniendo los usuarios', result);
      this.users = result;
    });


  }

  ngOnInit(): void {
  }
  /*
  navegarACard(id:number,name:string){
    this.router.navigate(['/user-card']);
    console.log(id,name);
    return name;
  }
  */
}
