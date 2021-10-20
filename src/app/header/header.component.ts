import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedIn;
    //console.log('this.isLoggedIn$ ', +this.isLoggedIn$);
  }
}
