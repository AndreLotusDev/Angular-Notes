import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioService } from '../../repository/usuario.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: UsuarioModel[] = [];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe(
      users => this.users = users
    )
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    this.usuarioService.deleteUser(id).subscribe();
  }

}
