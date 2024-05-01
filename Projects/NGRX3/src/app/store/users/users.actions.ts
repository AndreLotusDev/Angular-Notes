import { createAction, props } from "@ngrx/store";
import { UserModel } from "../../models/user.model";

export const enum userTypesActions {
    ADD_USER = '[ADD_USER] ADD USER',
    ADD_USER_SUCCESS = '[ADD_USER_SUCCESS] ADD USER SUCCESS',
    ADD_USER_FAIL = '[ADD_USER_FAIL] ADD USER FAIL',

    UPDATE_USER = '[UPDATE_USER] UPDATE USER',
    UPDATE_USER_SUCCESS = '[UPDATE_USER_SUCCESS] UPDATE USER SUCCESS',
    UPDATE_USER_FAIL = '[UPDATE_USER_FAIL] UPDATE USER FAIL',

    DELETE_USER = '[DELETE_USER] DELETE USER',
    DELETE_USER_SUCCESS = '[DELETE_USER_SUCCESS] DELETE USER SUCCESS',
    DELETE_USER_FAIL = '[DELETE_USER_FAIL] DELETE USER FAIL',

    LOAD_USERS = '[LOAD_USERS] LOAD USERS',
    LOAD_USERS_SUCCESS = '[LOAD_SUCCESS] LOAD SUCCESS',
    LOAD_USERS_FAIL = '[LOAD_FAIL] LOAD FAIL',

    LOAD_USER = '[LOAD_USER] LOAD USER',
    LOAD_USER_SUCCESS = '[LOAD_USER_SUCCESS] LOAD USER SUCCESS',
    LOAD_USER_FAIL = '[LOAD_USER_FAIL] LOAD USER FAIL'
}   

//Load users
export const loadUsers = createAction(
    userTypesActions.LOAD_USERS)

export const loadUsersSuccess = createAction(
    userTypesActions.LOAD_USERS_SUCCESS,
    props<{ payload: UserModel[] }>()
)

export const loadUsersFail = createAction(
    userTypesActions.LOAD_USERS_FAIL,
    props<{ error: string }>()
)

//Load user
export const loadUser = createAction(
    userTypesActions.LOAD_USER,
    props<{ payload: number }>()
)

export const loadUserSuccess = createAction(
    userTypesActions.LOAD_USER_SUCCESS,
    props<{ payload: UserModel }>()
)

export const loadUserFail = createAction(
    userTypesActions.LOAD_USER_FAIL,
    props<{ error: string }>()
)

//Create user
export const addUser = createAction(
    userTypesActions.ADD_USER,
    props<{ payload: UserModel }>()
)

export const addUserSuccess = createAction(
    userTypesActions.ADD_USER_SUCCESS,
    props<{ payload: UserModel }>()
)

export const addUserFail = createAction(
    userTypesActions.ADD_USER_FAIL,
    props<{ error: string }>()
)

//Update user
export const updateUser = createAction(
    userTypesActions.UPDATE_USER,
    props<{ payload: UserModel }>()
)

export const updateUserSuccess = createAction(
    userTypesActions.UPDATE_USER_SUCCESS,
    props<{ payload: UserModel }>()
)

export const updateUserFail = createAction(
    userTypesActions.UPDATE_USER_FAIL,
    props<{ error: string }>()
)

//Delete user

export const deleteUser = createAction(
    userTypesActions.DELETE_USER,
)

export const deleteUserSuccess = createAction(
    userTypesActions.DELETE_USER_SUCCESS,
    props<{ payload: number }>()
)

export const deleteUserFail = createAction(
    userTypesActions.DELETE_USER_FAIL,
    props<{ error: string }>()
)

