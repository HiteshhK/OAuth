import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SocialUsers } from '../Models/SocialUsers';
@Injectable({
  providedIn: 'root'
})
export class SocialloginService implements CanActivate {
  user: SocialUsers;
  loggedIn: boolean = false;
  constructor() { }
  canActivate() {
    if (this.user) {
      return true;
    }
    return false;
  }
}
