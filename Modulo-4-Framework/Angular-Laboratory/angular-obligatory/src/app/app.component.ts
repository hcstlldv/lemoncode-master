import { Component } from '@angular/core';
import { AuthService } from './components/login/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-obligatory';

    isLogged$ = this.authService.isLogged();

    constructor(private readonly authService: AuthService) {}
}
