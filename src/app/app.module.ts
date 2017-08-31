import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {
  ApiService,
  AuthGuard,
  FooterComponent,
  HeaderComponent,
  JwtService,
  ProfilesService,
  SharedModule,
  UserService
} from './shared';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { routing } from './app.routing';
import {HomeComponent} from './home/home.component';
import {AuthenticationService} from './shared/services/authentication.service';
import {AlertService} from './shared/services/alert.service';

// const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    routing
  ],
  providers: [
    ApiService,
    AuthGuard,
    JwtService,
    AuthenticationService,
    AlertService,
    ProfilesService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
