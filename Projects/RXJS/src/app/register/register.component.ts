import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { StateService } from './service/state.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  states: string[] = [];
  finalUser: User = new User();

  constructor(private fb: FormBuilder, private stateService: StateService) { }
  ngOnInit(): void {
    this.states = this.stateService.getStates();

    this.userForm = this.fb.group({
      name: [''],
      lastName: [''],
      states: this.fb.array([])
    });

    const selectedStates = this.userForm.get('states') as FormArray;

    this.states.forEach(() => {
      selectedStates.push(this.fb.control(false));
    })
  }

  onStateChange(event: any, index: number) {
    const selectedStates = this.userForm.get('states') as FormArray;
    selectedStates.controls[index].setValue(event.target.checked);
  }

  addUser() {
    let tempUser = this.userForm?.value;

    this.finalUser = Object.assign({}, this.finalUser, this.userForm.value);

    let selectedStates: string[] = [];
    let selectedStatesForm = this.userForm?.get('states') as FormArray;

    selectedStatesForm.controls.forEach((state, index) => {
      if (state.value) {
        selectedStates.push(this.states[index])
      }
    })
  }

}
