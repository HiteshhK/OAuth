import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService implements CanActivate {
  user: SocialUser;
  loggedIn: boolean = false;
  constructor(private authService: SocialAuthService,
    private router: Router) {
    this.authService.authState.subscribe(user => {
      if (user) {
        console.log({ user })
        this.user = user;
        this.loggedIn = user != null;
        this.router.navigate(['/dashboard'])
      }
    });
  }
  canActivate() {
    if (this.user) {
      return true;
    }
    this.router.navigate([''])
    return false;
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    this.user = undefined;
    this.loggedIn = false;
    this.router.navigate(['']);
  }
}
