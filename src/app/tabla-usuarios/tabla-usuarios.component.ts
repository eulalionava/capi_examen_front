import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  public datos:any = [];
  
  constructor(
    private _userService:UsuarioService
  ) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    this._userService.getUsuario().subscribe(
      response=>{
        this.datos = response;
        console.log(this.datos);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
