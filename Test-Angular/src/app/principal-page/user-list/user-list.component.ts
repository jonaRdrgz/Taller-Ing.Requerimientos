import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { UserListService } from './user-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserListService]
})

export class UserListPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public users: User[];
  public title: string;

  constructor(
    private userListService: UserListService
  ) {
    this.users = [];
    this.title = 'Lista de usuarios';
  }

  ngOnInit() {
    this.subscription = this.userListService.getAllUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
