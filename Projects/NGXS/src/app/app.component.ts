import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTodo, RemoveTodo } from './todo-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  todoInput: string = '';

  ngOnInit(): void {
    console.log('Initializing...');
  }

  constructor(private store: Store) {

  }

  public addToDo(todo: string) {
    this.store.dispatch(new AddTodo(todo));

    // Clear input
    this.todoInput = '';
  }
}
