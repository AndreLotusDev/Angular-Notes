import { ActionReducerMap } from "@ngrx/store";
import { UserEffects } from "./users.effects";
import * as fromUser from './users.reducer';
import { UserState } from "./users.reducer";

export interface AppState {
    users: UserState
}

export const appReducer: ActionReducerMap<AppState> = {
    users: fromUser.userReducer
}

export const appEffects = [
    UserEffects
]