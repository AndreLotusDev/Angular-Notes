import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UserModel } from "../../models/user.model";
import * as fromUserAction from './users.actions';

export interface UserState {
    users: UserModel[];
    user: UserModel;
    error: string | '';
}

export const initialState : UserState = {
    users: [],
    user: {
        id: 0,
        name: '',
        age: 0,
        profile: ''
    },
    error: ''
}

const _userReducer = createReducer(
    initialState,
    on(fromUserAction.loadUsersSuccess, (state, { payload }) => {
        return {
            ...state,
            users: payload
        }
    }),
    on(fromUserAction.loadUsersFail, (state, { error }) => {
        return {
            ...state,
            error
        }
    }),

    on(fromUserAction.loadUserSuccess, (state, { payload }) => {
        return {
            ...state,
            user: payload
        }
    }),
    on(fromUserAction.loadUserFail, (state, { error }) => {
        return {
            ...state,
            error
        }
    }),

    on(fromUserAction.addUserSuccess, (state, { payload }) => {
        return {
            ...state,
            users: [...state.users, payload]
        }
    }),
    on(fromUserAction.addUserFail, (state, { error }) => {
        return {
            ...state,
            error
        }
    }),

    on(fromUserAction.updateUserSuccess, (state, { payload }) => {
        return {
            ...state,
            user: payload,
            users: state.users.map(user => user.id === payload.id ? payload : user)
        }
    }),
    on(fromUserAction.updateUserFail, (state, { error }) => {
        return {
            ...state,
            error
        }
    }),

    on(fromUserAction.deleteUserSuccess, (state, { payload }) => {
        return {
            ...state,
            users: state.users.filter(user => user.id !== payload)
        }
    }),
    on(fromUserAction.deleteUserFail, (state, { error }) => {
        return {
            ...state,
            error
        }
    }),
);

export function userReducer(state = initialState, action: Action) {
    return _userReducer(state, action);
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getUsers = createSelector(getUserFeatureState, state => state.users);
export const getUser = createSelector(getUserFeatureState, state => state.user);
export const getError = createSelector(getUserFeatureState, state => state.error);

export const getUsersAdmin = createSelector(getUserFeatureState, state => {
    return state.users.filter(user => user.profile === 'admin')
})