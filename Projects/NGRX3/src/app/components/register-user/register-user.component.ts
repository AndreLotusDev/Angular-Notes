import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { AppState } from '../../store/users/app.state';
import * as fromUserActions from '../../store/users/users.actions';
import * as fromUserReducers from '../../store/users/users.reducer';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit, OnDestroy {

  userForm!: FormGroup;
  user$: Observable<UserModel | null> = this.store.select(fromUserReducers.getUser);

  constructor(private store: Store<AppState>) {

  }
  ngOnDestroy(): void {
    
  }

  ngOnInit() {
    this.buildForm();

    this.user$.subscribe(user => {
      if (user) {
        this.userForm.patchValue({
          'id': user.id,
          'name': user.name,
          'age': user.age,
          'profile': user.profile
        });
      } else if(user == null ){

        this.userForm.patchValue({
          'id': 0,
          'name': '',
          'age': 0,
          'profile': ''
        });
      }
    })
  }

  private buildForm() {
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
      this.store.dispatch(fromUserActions.updateUser({ payload: userModel }));
    } else {
      this.store.dispatch(fromUserActions.addUser({ payload: userModel }));
    }
  }

}