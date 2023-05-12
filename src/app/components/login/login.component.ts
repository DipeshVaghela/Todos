import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private dataService: DataService) {
  }

  onLoginFormSubmitted(loginForm: NgForm) {
    const userName = loginForm.value.userName;
    const password = loginForm.value.password;

    const filteredUser = this.dataService.users.filter(user => user.userName === userName && user.password === password);

    if (filteredUser.length === 1) {
      this.dataService.currentUser = filteredUser[0];
      alert(`Hello ${this.dataService.currentUser.fullName}`);
    }
    else {
      alert(`Invalid credentials !!!`);
    }
  }
}
