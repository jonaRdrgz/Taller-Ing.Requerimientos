import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserListService]
})
export class UserListPageComponent implements OnInit {
  public users: User[];
  public title: string;

  constructor(
    private userListService: UserListService
  ) {
    this.title = 'Lista de usuarios';
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userListService.getUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }
}
