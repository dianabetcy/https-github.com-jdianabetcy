import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private auth: AuthenticationService) {}
  isLoggedIn$: Observable<boolean>;
  issuperAdmin: boolean;

  ngOnInit() {
    //this.isLoggedIn$ = this.auth.isLoggedIn;
    //console.log('this.isLoggedIn$' + this.isLoggedIn$);
    this.issuperAdmin = this.auth.isSuperAdmin();
    console.log('this.issuperAdmin$' + this.issuperAdmin);
  }
}
