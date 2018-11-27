import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()

export class UsuarioProvider {

      

    caminnhoCursoWebService = "http://localhost:8080/Cursos/rest"

    constructor(public http: Http){

    }

    public cadastrarUsuario(usuario){
        return this.http.post(`${this.caminnhoCursoWebService}/cadastrousuario`, JSON.stringify(usuario), {headers: this.getHeaders()});
      }

    public exibirUsuarios(){
        return this.http.get(`${this.caminnhoCursoWebService}/cadastrousuario`)
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
      }

}