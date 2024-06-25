import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  NonNullableFormBuilder,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  untypedFormService = inject(UntypedFormBuilder);
  typedFormService = inject(FormBuilder);

  typedForm = this.typedFormService.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
  });

  nonNullableFormService = inject(NonNullableFormBuilder);

  nonNullableForm = this.nonNullableFormService.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
  });

  constructor() {}
  ngOnInit(): void {
    this.generateForm();
  }

  private generateForm() {
    //Using typed forms
    const typedForm = this.typedFormService.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
    });

    const typedFormValues = typedForm.value;
    console.log(typedFormValues.name);

    const untypedForm = this.untypedFormService.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }
}
