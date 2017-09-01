import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private isLoggedIn: boolean;
  constructor(private http: Http) { }

  login(username: string, password: string) {
    console.log('logging in user');
    console.log(username);
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
          // login successful if there's a jwt token in the response
          const user = response.json();
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            // set the isLoggedIn boolean value to true, so that we can display this in the header
            this.isLoggedIn = true;
          }

          return user;
      });
  }

  loggedIn() {
    return this.isLoggedIn;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // set the isLoggedIn boolean value to false, so that we can display this in the header
    this.isLoggedIn = false;
  }
}
