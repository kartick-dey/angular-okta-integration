import { Component, Inject } from '@angular/core';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { } from '@okta/okta-angular/'
import OktaAuth from '@okta/okta-auth-js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-okta-integration';
  public isAuthenticated: boolean;

  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth, public authStateService: OktaAuthStateService) {
  }

  async ngOnInit() {
    console.log(`this.isAuthenticated before: `, this.isAuthenticated)
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    console.log(`this.isAuthenticated after: `, this.isAuthenticated)
  }

  async login() {
    await this.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.oktaAuth.signOut();
  }
}
