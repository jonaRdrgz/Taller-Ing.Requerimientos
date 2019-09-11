import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListPageComponent {
  public users: User[];
  public title: string;

  constructor() {
    this.title = 'Lista de usuarios';
    this.users = [
      { usersPk: 1, name: 'Pedro' },
      { usersPk: 2, name: 'Juan' },
      { usersPk: 3, name: 'Lucas' }
    ];
  }
}
