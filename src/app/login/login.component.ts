import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialloginService } from '../services/sociallogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service: SocialloginService) { }

  ngOnInit() { }
  signIn() {
    this.service.signInWithGoogle();
  }
}
