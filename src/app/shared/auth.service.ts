import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    isAuthenticated = false;

    authenticate(login, password): Promise<boolean> {
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.isAuthenticated = true;
                resolve(true);
            }, 1000);
        });
        return p;
    }
}
