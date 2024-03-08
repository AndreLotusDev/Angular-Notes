import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StateService } from './service/state.service';
import { User } from './models/user.model';
import { MASKS,NgBrazilValidators  } from 'ng-brazil';
import { CustomValidators } from '@rizwan3d/ngx-custom-validators-16';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  states: string[] = [];
  finalUser: User = new User();
  public MASKS = MASKS;

  constructor(private fb: FormBuilder, private stateService: StateService) { }
  ngOnInit(): void {
    this.states = this.stateService.getStates();

    const min18 = CustomValidators.min(18);

    this.userForm = this.fb.group({
      name: [''],
      lastName: [''],
      states: this.fb.array([]),
      dob: this.fb.control(''),
      cpf: this.fb.control('', [NgBrazilValidators.cpf]),
      age: this.fb.control('', [min18]),
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
    console.log(this.userForm);
    console.log(this.userForm.controls['age'].errors?.['min']);
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
