import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveTodo, TodoSelectors, TodoState } from '../todo-store';

@Component({
  selector: 'app-to-do-list-viewer',
  templateUrl: './to-do-list-viewer.component.html',
  styleUrls: ['./to-do-list-viewer.component.css']
})
export class ToDoListViewerComponent implements OnInit {

  @Select(TodoSelectors.todos) todos$: Observable<string[]> | undefined;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  public removeTodo(todo: string) {
    this.store.dispatch(new RemoveTodo(todo));
  }
}
