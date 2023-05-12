import { Injectable } from '@angular/core';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  users: User[];

  currentUser: User | null;

  constructor() {
    this.users = [];
    this.currentUser = null;
  }
}
