import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'jsr-login-view',
  template: `
    <form *ngIf="!auth.isAuthenticated; else alreadyLoggedInMessage" (submit)="authenticate(login, password)">
      <input type="text" [(ngModel)]="login" name="login"><br>
      <input type="password" [(ngModel)]="password" name="password"><br>
      <button>sign in</button>
    </form>
    <template #alreadyLoggedInMessage>
      <p>you are logged in</p>
    </template>
  `,
  styles: []
})
export class LoginViewComponent {
  login: string;
  password: string;
  isAuthenticated: boolean;

  constructor(private auth: AuthService) { }

  async authenticate(login: string, password: string) {
    try {
      this.isAuthenticated = await this.auth.authenticate(login, password);
    } catch (err) {
      console.error(err);
    }
  }

}
