import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreConstants } from '../../core/core.constanst';
import { User } from '../../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserListService {
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    const url = `${CoreConstants.API_ENDPOINT}/Users`;
    return this.http.get<User[]>(url, httpOptions);
  }
}
