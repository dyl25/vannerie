import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    message: string;

    constructor(private authService: AuthService, private router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Tentative de connexion ...';
        
        this.authService.login().subscribe(() => {
            this.setMessage();
            
            if (this.authService.isLoggedIn) {
                let redirect = this.authService.redirectUrl ? 
                this.authService.redirectUrl : '/admin';
                
                this.router.navigate([redirect]);
            }
        });
    }
    
    logout() {
        this.authService.logout();
        this.setMessage();
    }

}
