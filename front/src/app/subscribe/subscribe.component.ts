import { Component, Input, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { AuthService } from '../auth.service';
import { User } from '../users/user';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {

    //@Input() user: User;
    subscribeForm: FormGroup;
    //informations sur la validation du formulaire
    subscribeErrors: Array<string> = [];

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
        this.createForm();
    }

    get username() { return this.subscribeForm.get('username') }
    get email() { return this.subscribeForm.get('email') }
    get password() { return this.subscribeForm.get('password') }
    get password_confirmation() { return this.subscribeForm.get('password_confirmation') }

    createForm() {
        this.subscribeForm = this.fb.group({
            username: ['', [Validators.required]],
            //email: ['', [Validators.required]],
            password: ['', [Validators.required]],
            //password_confirmation: ['', [Validators.required]]
        });
    }

    // ngOnChanges() {
    //     this.subscribeForm.reset({
    //         title: this.user.email,
    //         password: this.user.password
    //     });
    // }

    onSubmit() {
        if(this.subscribeForm.valid) {
            this.authService.subscribe(this.subscribeForm.value).subscribe(data => {
                let link = ['/admin'];
                this.router.navigate(link);
            },
            err => {
                this.subscribeErrors = [];
                this.subscribeErrors.push(/*err*/'Une erreur s\'est produite lors de la sauvegarde');
            }
        );
    }
}

// revert() { this.ngOnChanges(); }

// private prepareSubscribe(formValue: FormGroup): void {
//
//     Object.assign(this.user, formValue);
// }

}
