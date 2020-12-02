import { Component, OnInit } from '@angular/core';
import { SocialloginService } from '../services/sociallogin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public _service: SocialloginService) { }

  ngOnInit(): void {
  }
  signOut() {
    this._service.signOut();
  }
}
