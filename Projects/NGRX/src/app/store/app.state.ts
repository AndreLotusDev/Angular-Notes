import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppState {
    counter: number;
}

export const appInitialState: IAppState = {
    counter: 0
}

export const increaseCounter = createAction('[App] Increase Counter');
export const decreaseCounter = createAction('[App] Decrease Counter');

export const appReducer = createReducer(
    appInitialState,
    on(increaseCounter, state => ({...state, counter: state.counter + 1})),
    on(decreaseCounter, state => ({...state, counter: state.counter - 1})),
)