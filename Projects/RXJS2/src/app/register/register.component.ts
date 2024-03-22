import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StateService } from './service/state.service';
import { User } from './models/user.model';
import { ProductService } from './service/product.service';
import { Product } from '../shared/models/product-model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { loadProducts, removeLastProduct } from '../app.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  states: string[] = [];
  finalUser: User = new User();
  products: Product[] = [];
  products$: Observable<Product[]> | undefined; 
  listOfProducts = [];

  constructor(private fb: FormBuilder, 
    private stateService: StateService,
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    private store: Store<AppState>) { }
  ngOnInit(): void {
    this.states = this.stateService.getStates();

    this.userForm = this.fb.group({
      name: [''],
      lastName: [''],
      states: this.fb.array([]),
      dob: this.fb.control(''),
    });

    const selectedStates = this.userForm.get('states') as FormArray;

    this.states.forEach(() => {
      selectedStates.push(this.fb.control(false));
    })

    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });

    this.store.dispatch(loadProducts());

    this.products$ = this.store.select(state => state.productState.products);

    this.products$.subscribe(data => {
      console.log(data);
      this._snackBar.open( data.length + ' products loaded', 'Close', {
        duration: 2000
      })
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

  onSelected(product: Product) {
    // this._snackBar.open( product.name , 'Close', {
    //   duration: 2000
    // })
  }

  removeProduct() {
    this.store.dispatch(removeLastProduct());
  }

}
