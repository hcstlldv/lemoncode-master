import { Component } from '@angular/core';
import { AuthService } from './components/login/auth.service';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-obligatory';

    isLogged$ = this.authService.isLogged();
    username$ = this.isLogged$.pipe(
        map((isLogged) => {
            return isLogged ? this.authService.getUsername() : null;
        })
    );

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router
    ) {}

    logout() {
        this.authService.logout();
        this.router.navigate(['home']);
    }
}
