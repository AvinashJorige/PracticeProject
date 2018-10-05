import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
      providedIn: 'root'
})
export class UserService {

      constructor(private http: HttpClient) { }

      // get all the users
      getAll() {
            return this.http.get<User[]>(`/users`);
      }
      register(user: User) {
            localStorage.setItem('users', user.toString() );
            console.log(localStorage.getItem('uses'))
            return user;
      }
}
