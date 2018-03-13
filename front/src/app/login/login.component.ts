import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;
    loginErrors: Array<string> = [];
    message: string;

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
        this.setMessage();
        this.createForm();
    }

    setMessage() {
        this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    get username() { return this.loginForm.get('username') }
    get password() { return this.loginForm.get('password') }

    createForm() {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    onSubmit() {
        this.message = 'Tentative de connexion ...';
        if(this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe(
                data => {
                this.setMessage();
                console.log(data);
                // let redirect = this.authService.redirectUrl ?
                // this.authService.redirectUrl : '/admin';
                //
                // this.router.navigate([redirect]);
            },
            err => {
                this.loginErrors = [];
                this.loginErrors.push('Une erreur s\'est produite lors de la connection');
            }
        );
        }
    }

    logout() {
        //this.authService.logout();
        this.setMessage();
    }

}
