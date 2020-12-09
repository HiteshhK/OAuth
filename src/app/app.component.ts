import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { SocialloginService } from './services/sociallogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OAuth-login';
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    public service: SocialloginService) {
    this.authService.authState.subscribe(user => {
      if (user) {
        console.log({ user })
        this.service.user = user;
        this.service.loggedIn = user != null;
        this.router.navigate(['/dashboard'])
      }
    })
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
    this.service.user = undefined;
    this.service.loggedIn = false;
    this.router.navigate(['']);
  }
  changeTitle(newTitle) {
    this.title = newTitle;
  }
}
