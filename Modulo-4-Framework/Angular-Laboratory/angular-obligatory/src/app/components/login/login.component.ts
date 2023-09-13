import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup | undefined;
    isUserValid: boolean = true;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly authService: AuthService,
        private readonly router: Router
    ) {}

    ngOnInit() {
        this.buildForm();
    }

    private buildForm() {
        this.loginForm = this.formBuilder.group({
            name: this.formBuilder.control('', {
                validators: [Validators.required],
            }),
            password: this.formBuilder.control('', {
                validators: [Validators.required],
            }),
        });
    }

    login() {
        this.isUserValid = this.authService.login(this.loginForm?.value);
        if (!this.isUserValid) return;
        this.router.navigate(['/dashboard']);
    }
}
