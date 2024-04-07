import { Action, Selector, State, StateContext } from "@ngxs/store";

export class Todo {
    constructor(public task: string, public description: string) { }
}

export enum TodoStatus {
    Loading = 'loading',
    Error = 'error',
    Normal = 'normal'
}

export class AddTodo {
    static readonly type = '[TODO] Add';
    constructor(public payload: Todo) { }
}

export class RemoveTodo {
    static readonly type = '[TODO] Remove';
    constructor(public payload: string) { }
}

export interface TodoStateModel {
    todos: Todo[]
    status: TodoStatus
}

@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        todos: [
            new Todo('Buy groceries', 'Buy milk, bread, and cheese'),
            new Todo('Finish project report', 'Report is due on Friday'),
            new Todo('Attend team meeting', 'Next week at 10am'),
            new Todo('Call the bank', 'Pay your utility bill'),
            new Todo('Schedule doctor appointment', 'Next week at 2pm')
        ],
        status: TodoStatus.Normal
    }
})

export class TodoState {
    @Action(AddTodo)
    add(ctx: StateContext<TodoStateModel>, action: AddTodo) {
        const state = ctx.getState();

        ctx.patchState({
            status: TodoStatus.Loading
        });

        setTimeout(() => {
            ctx.patchState({
                todos: [...state.todos, action.payload],
                status: TodoStatus.Normal
            })
        }, 1000);
    }

    @Action(RemoveTodo)
    remove(ctx: StateContext<TodoStateModel>, action: RemoveTodo) {
        const state = ctx.getState();

        ctx.patchState({
            status: TodoStatus.Loading
        });

        setTimeout(() => {
            ctx.patchState({
                todos: state.todos.filter(t => t.task !== action.payload),
                status: TodoStatus.Normal
            })
        }, 1000);
    }
}

export class TodoSelectors {
    @Selector([TodoState])
    static todos(state: TodoStateModel) {
        return state.todos;
    }

    @Selector([TodoState])
    static status(state: TodoStateModel) {
        return state.status;
    }
}