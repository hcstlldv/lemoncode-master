import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type User = {
    name: string;
    password: string;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly isLogged$ = new BehaviorSubject<boolean>(false);

    constructor() {}

    login(user: User): boolean {
        const { password, name } = user;
        if (password !== '12345678') return false;
        if (name !== 'master@lemoncode.net') return false;
        this.isLogged$.next(true);
        return true;
    }

    logout() {
        this.isLogged$.next(false);
    }

    isLogged(): Observable<boolean> {
        return this.isLogged$.asObservable();
    }

    getUsername() {}
}
