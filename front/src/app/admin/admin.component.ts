import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUser;

  constructor(private authService: AuthService) { }

  /*getCurrentUser(): void {
      this.authService.getCurrentUser().subscribe(user => {
        this.currentUser = user;
      });
  }*/

  ngOnInit() {
    //this.getCurrentUser();
    //console.log(this.currentUser);
  }

}
