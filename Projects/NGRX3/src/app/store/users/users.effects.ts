import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { UserService } from "../../repository/user.service";
import * as fromUser from "./users.actions";

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) {

    }

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(fromUser.userTypesActions.LOAD_USERS),
        exhaustMap(() => this.userService.getUsers().pipe(
            map(users => fromUser.loadUsersSuccess({ payload: users })),
            catchError(error => of(fromUser.loadUsersFail({ error })))
        ))
    ))

    loadUser$ = createEffect(() => this.actions$.pipe(
        ofType(fromUser.userTypesActions.LOAD_USER),
        exhaustMap((record: any) => this.userService.getUser(record.payload).pipe(
            map(user => fromUser.loadUserSuccess({ payload: user })),
            catchError(error => of(fromUser.loadUserFail({ error })))
        ))
    ))

    createUser$ = createEffect(() => this.actions$.pipe(
        ofType(fromUser.userTypesActions.ADD_USER),
        exhaustMap((record: any) => this.userService.addUser(record.payload).pipe(
            map(user => fromUser.addUserSuccess({ payload: user })),
            catchError(error => of(fromUser.addUserFail({ error })))
        ))
    ))

    updateUser$ = createEffect(() => this.actions$.pipe(
        ofType(fromUser.userTypesActions.UPDATE_USER),
        exhaustMap((record: any) => this.userService.updateUser(record.payload).pipe(
            map(user => fromUser.updateUserSuccess({ payload: user })),
            catchError(error => of(fromUser.updateUserFail({ error })))
        ))
    ))

    deleteUser$ = createEffect(() => this.actions$.pipe(
        ofType(fromUser.userTypesActions.DELETE_USER),
        exhaustMap((record: any) => this.userService.deleteUser(record.payload).pipe(
            map(user => fromUser.deleteUserSuccess({ payload: user.id })),
            catchError(error => of(fromUser.deleteUserFail({ error })))
        ))
    ))
}