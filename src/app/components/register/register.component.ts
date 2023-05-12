import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private dataService: DataService) {
  }

  registerUser(registrationForm: NgForm) {
    const user = new User(registrationForm.value.userName, registrationForm.value.password, registrationForm.value.firstName, registrationForm.value.lastName);
    this.dataService.users.push(user);
    alert("User registered !");
  }
}
