import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { IngredienteService } from '../../../services/ingrediente.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { IngredienteModel } from '../../../Models/IngredienteModel';

import { ProveedorModel } from '../../../Models/ProveedorModel';
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'app-edit-ingrediente',
  templateUrl: './edit-ingrediente.component.html',
  styleUrls: ['./edit-ingrediente.component.css']
})
export class EditIngredienteComponent implements OnInit {

  bebida: IngredienteModel;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private ingredienteService: IngredienteService, private proveedorService: ProveedorService) { }
  proveedores: ProveedorModel[];
  modForm: ProveedorModel;

  ngOnInit() {
    let ingredienteId = localStorage.getItem("ingredienteId");
    if(!ingredienteId){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      nombre: ['', Validators.required],
      inventario: ['', Validators.required],
      idProveedor: ['', Validators.required]
    });

    this.ingredienteService.getIngredienteById(ingredienteId).subscribe(data=>{
      console.log(data);
      this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
    });

    this.getAllProveedores();
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

  getAllProveedores(): void {
    this.proveedorService.getAllProveedores().subscribe(data=>{
      this.proveedores = data;
    });
  };

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.ingredienteService.updateIngrediente(this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-ingrediente']);
      });
    }
  }

}