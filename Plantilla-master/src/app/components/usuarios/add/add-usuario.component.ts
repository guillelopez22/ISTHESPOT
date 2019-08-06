import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from '../../../services/usuario.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuarioService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      IdPersonal: ['', Validators.required],
      idOrdenes: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      scope: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.usuarioService.addUsuario(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-usuario']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}