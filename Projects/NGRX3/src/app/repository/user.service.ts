import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient) {
        
    }

    getUsers() : Observable<UserModel[]> {
        return this.http.get<UserModel[]>("http://localhost:3000/Usuarios");
    }
    
    getUser(id: number) {
        return this.http.get<UserModel>("http://localhost:3000/Usuarios/" + id);
    }

    addUser(record: UserModel){
        let headers = {
            'Content-Type': 'application/json',
            'charset': 'UTF-8'
        }
        return this.http.post<UserModel>("http://localhost:3000/Usuarios", JSON.stringify(record), {headers: headers});
    }

    updateUser(record: UserModel) : Observable<UserModel> {
        let headers = {
            'Content-Type': 'application/json',
            'charset': 'UTF-8'
        }
        return this.http.put<UserModel>("http://localhost:3000/Usuarios/" + record.id, JSON.stringify(record), {headers: headers});
    }
    
    deleteUser(id: number){
        return this.http.delete<UserModel>("http://localhost:3000/Usuarios/" + id);
    }
}