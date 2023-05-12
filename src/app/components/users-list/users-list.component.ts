import { Component } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  users: User[];

  constructor(private dataService: DataService) {
    this.users = this.dataService.users;
  }
}
