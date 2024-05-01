import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../repository/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: UserModel[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    this.userService.deleteUser(id).subscribe();
  }

}
