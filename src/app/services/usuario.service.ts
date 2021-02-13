import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url:any;

  constructor(
    private _http:HttpClient
  ) { 
    this.url = environment.url;
  }

  getUsuario(){

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
 
        return this._http.get(this.url + 'datos', {headers:headers});
  }
}
