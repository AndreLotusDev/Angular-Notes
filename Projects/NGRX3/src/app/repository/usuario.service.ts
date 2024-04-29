import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";

export class UsuarioService {
    constructor(private http: HttpClient) {
        
    }

    getUsuarios() {
        return this.http.get<UsuarioModel[]>("http://localhost:3000/Usuarios");
    }
    
    getUsuario(id: number) {
        return this.http.get<UsuarioModel>("http://localhost:3000/Usuarios/" + id);
    }

    addUsuario(record: UsuarioModel){
        let headers = {
            'Content-Type': 'application/json',
            'charset': 'UTF-8'
        }
        return this.http.post<UsuarioModel>("http://localhost:3000/Usuarios", JSON.stringify(record), {headers: headers});
    }

    updateUsuario(record: UsuarioModel){
        let headers = {
            'Content-Type': 'application/json',
            'charset': 'UTF-8'
        }
        return this.http.put<UsuarioModel>("http://localhost:3000/Usuarios/" + record.id, JSON.stringify(record), {headers: headers});
    }
    
    deleteUsuario(id: number){
        return this.http.delete<UsuarioModel>("http://localhost:3000/Usuarios/" + id);
    }
}