import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel as UserModel } from '../../models/usuario.model';
import { UsuarioService as UserService } from '../../repository/usuario.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userForm = new FormGroup({
      'id': new FormControl(0, Validators.required),
      'nome': new FormControl('Andre', Validators.required),
      'idade': new FormControl(89, [Validators.required, Validators.min(1)]),
      'perfil': new FormControl('Administrador', Validators.required)
    });
  }

  onSubmit() {
    const id = this.userForm.get('id')?.value;
    let userModel: UserModel = {
      id: this.userForm.get('id')?.value,
      nome: this.userForm.get('nome')?.value,
      idade: this.userForm.get('idade')?.value,
      perfil: this.userForm.get('perfil')?.value
    }

    if (id) {
      this.userService.updateUser(userModel).subscribe(
        
      );
    } else {
      this.userService.addUser(userModel).subscribe(
        
      );
    }
  }

}