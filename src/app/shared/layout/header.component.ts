import { Component, OnInit } from '@angular/core';

import { User } from '../models';
import { UserService } from '../services';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private authService: AuthenticationService
  ) {}

  isLoggedIn() {
    const isLogged = this.authService.loggedIn();
    console.log('isLogged = ' + isLogged);
    return isLogged;
  }
}
