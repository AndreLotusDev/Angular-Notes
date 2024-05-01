import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../repository/user.service';

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
      'name': new FormControl('Andre', Validators.required),
      'age': new FormControl(89, [Validators.required, Validators.min(1)]),
      'profile': new FormControl('Administrador', Validators.required)
    });
  }

  onSubmit() {
    const id = this.userForm.get('id')?.value;
    let userModel: UserModel = {
      id: this.userForm.get('id')?.value,
      name: this.userForm.get('name')?.value,
      age: this.userForm.get('age')?.value,
      profile: this.userForm.get('profile')?.value
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