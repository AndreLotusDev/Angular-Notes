import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsuarioModel } from "../models/usuario.model";

@Injectable({providedIn: 'root'})
export class UsuarioService {
    constructor(private http: HttpClient) {
        
    }

    getUsers() : Observable<UsuarioModel[]> {
        return this.http.get<UsuarioModel[]>("http://localhost:3000/Usuarios");
    }
    
    getUser(id: number) {
        return this.http.get<UsuarioModel>("http://localhost:3000/Usuarios/" + id);
    }

    addUser(record: UsuarioModel){
        let headers = {
            'Content-Type': 'application/json',
            'charset': 'UTF-8'
        }
        return this.http.post<UsuarioModel>("http://localhost:3000/Usuarios", JSON.stringify(record), {headers: headers});
    }

    updateUser(record: UsuarioModel) : Observable<UsuarioModel> {
        let headers = {
            'Content-Type': 'application/json',
            'charset': 'UTF-8'
        }
        return this.http.put<UsuarioModel>("http://localhost:3000/Usuarios/" + record.id, JSON.stringify(record), {headers: headers});
    }
    
    deleteUser(id: number){
        return this.http.delete<UsuarioModel>("http://localhost:3000/Usuarios/" + id);
    }
}