import { Action, Selector, State, StateContext } from "@ngxs/store";

export class AddTodo {
    static readonly type = '[TODO] Add';
    constructor(public payload: string) { }
}

export class RemoveTodo {
    static readonly type = '[TODO] Remove';
    constructor(public payload: string) { }
}

export interface TodoStateModel {
    todos: string[]
}

@State<TodoStateModel>({
    name: 'todos',
    defaults: {
      todos: [
        'Buy groceries',
        'Finish project report',
        'Attend team meeting',
        'Call the bank',
        'Schedule doctor appointment'
      ]
    }
  })

export class TodoState {
    @Action(AddTodo)
    add(ctx: StateContext<TodoStateModel>, action: AddTodo) {
        const state = ctx.getState();
        return ctx.patchState({
            todos: [...state.todos, action.payload]
        })
    }

    @Action(RemoveTodo)
    remove(ctx: StateContext<TodoStateModel>, action: RemoveTodo) {
        const state = ctx.getState();
        return ctx.patchState({
            todos: state.todos.filter(t => t !== action.payload)
        })
    }
}

export class TodoSelectors {
    @Selector([TodoState])
    static todos(state: TodoStateModel) {
        return state.todos;
    }
}