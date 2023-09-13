import { Injectable } from '@angular/core';

type User = {
    name: string;
    password: string;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor() {}

    login(user: User): boolean {
        const { password, name } = user;
        if (password !== '12345678') return false;
        if (name !== 'master@lemoncode.net') return false;
        return true;
    }

    logout() {}

    isLogged() {}

    getUsername() {}
}
