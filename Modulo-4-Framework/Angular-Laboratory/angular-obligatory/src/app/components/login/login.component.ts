import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup | undefined;

    constructor(private readonly _formBuilder: FormBuilder) {}

    ngOnInit() {
        this.loginForm = this._formBuilder.group({
            name: this._formBuilder.control('', {
                validators: [Validators.required],
            }),
            password: this._formBuilder.control('', {
                validators: [Validators.required],
            }),
        });
    }
}
