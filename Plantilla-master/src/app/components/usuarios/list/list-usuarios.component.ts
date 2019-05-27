import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserModel } from '../../../Models/UserModel';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})

export class ListUsuarioComponent implements OnInit {

  user: UserModel[];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.getAllUsuarios();
  }

  getAllUsuarios(): void {
    this.usuarioService.getAllUsuarios().subscribe(data=>{
      this.user = data;
    });
  };

  addUsuario(): void {
    this.router.navigate(['add-usuario']);
  }

  deleteUsuario(user: UserModel){
    
    this.usuarioService.deleteUsuario(user._id).subscribe(data => {
      console.log(data);
      this.getAllUsuarios();
    });
  }

  updateUsuario(user: UserModel){
    localStorage.removeItem("userId");
    localStorage.setItem("userId", user._id);
    this.router.navigate(['edit-usuario']);
  }

}