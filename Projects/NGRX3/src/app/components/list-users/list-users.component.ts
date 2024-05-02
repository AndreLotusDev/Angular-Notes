import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { AppState } from '../../store/users/app.state';
import * as fromUsersAction from '../../store/users/users.actions';
import * as fromUserSelector from '../../store/users/users.reducer';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users$: Observable<UserModel[]> = this.store.select(fromUserSelector.getUsers);

  constructor(
    private store: Store<AppState>
  ) 
  { 

  }

  ngOnInit() {
    this.store.dispatch(fromUsersAction.loadUsers());
  }

  deleteUser(id: number) {
    this.store.dispatch(fromUsersAction.deleteUser({ payload: id }));
  }

  editUser(user: UserModel) {
    this.store.dispatch(fromUsersAction.loadUser({ payload: user.id }));
  }

}
