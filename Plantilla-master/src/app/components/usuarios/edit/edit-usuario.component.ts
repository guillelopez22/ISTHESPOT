import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from '../../../services/usuario.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { UserModel } from '../../../Models/UserModel';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  usuario: UserModel;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    let usuarioId = localStorage.getItem("usuarioId");
    if(!usuarioId){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      IdPersonal: ['', Validators.required],
      idOrdenes: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      scope: ['', Validators.required]
    });

    this.usuarioService.getUsuarioById(usuarioId).subscribe(data=>{
      console.log(data);
      this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
    });
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.usuarioService.updateUsuario(this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-usuario']);
      });
    }
  }

}