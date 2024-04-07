import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AddTodo, RemoveTodo, Todo, TodoSelectors, TodoStatus } from './todo-store';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  todoInput: string = 'buy food';
  todoDescription: string = 'buy oat';

  @Select(TodoSelectors.status) status$: Observable<TodoStatus> | undefined;

  constructor(private store: Store,
    private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {
    console.log('Initializing...');

    this.status$!.subscribe(status => {
      console.log(status);
      if (status === TodoStatus.Loading) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    })
  }

  public addToDo() {
    Swal.fire({
      title: 'Add Todo',
      text: 'Are you sure you want to add this todo?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        this.finishAddingTodo();
      }
    });
  }

  public finishAddingTodo() {
    this.store.dispatch(new AddTodo(new Todo(this.todoInput, this.todoDescription)));

    this.todoInput = 'buy food';
    this.todoDescription = 'buy oat';
  }
}
