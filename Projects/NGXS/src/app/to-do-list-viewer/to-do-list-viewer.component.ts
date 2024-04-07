import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveTodo, Todo, TodoSelectors, TodoStatus } from '../todo-store';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-to-do-list-viewer',
  templateUrl: './to-do-list-viewer.component.html',
  styleUrls: ['./to-do-list-viewer.component.css']
})
export class ToDoListViewerComponent implements OnInit {

  @Select(TodoSelectors.todos) todos$: Observable<Todo[]> | undefined;
  @Select(TodoSelectors.status) status$: Observable<TodoStatus> | undefined;

  constructor(private store: Store,
    public spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    console.log('starting table product list');

    this.status$!.subscribe(status => {
      console.log(status);
      if (status === TodoStatus.Loading) {
        this.spinner.show();
      } else {
        this.spinner.hide();

        this.onFinishedLoading();
      }
    })
  }

  public removeTodo(todo: string) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.removeTodoConfirmed(todo);
        this.placeholder = () => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      }
    })
  }

  private removeTodoConfirmed(todo: string) {
    this.store.dispatch(new RemoveTodo(todo));
  }

  onFinishedLoading() {
    this.placeholder();
  }

  placeholder = () => { };
}
