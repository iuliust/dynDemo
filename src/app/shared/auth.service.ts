import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';

@Injectable()
export class AuthService {
    isAuthenticated = false;

    constructor() {}

    public authenticate(login, password): Promise<boolean> {
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.isAuthenticated = true;
                resolve(true);
            }, 1000);
        });
        return p;
    }
}
