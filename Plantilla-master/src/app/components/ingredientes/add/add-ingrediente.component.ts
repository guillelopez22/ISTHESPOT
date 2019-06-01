import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { IngredienteService } from '../../../services/ingrediente.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

import { ProveedorModel } from '../../../Models/ProveedorModel';
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'app-add-ingrediente',
  templateUrl: './add-ingrediente.component.html',
  styleUrls: ['./add-ingrediente.component.css']
})
export class AddIngredienteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private ingredienteService: IngredienteService,private proveedorService: ProveedorService) { }
  proveedores: ProveedorModel[];
  addForm: FormGroup;
  submitted = false;
  nombreproveedores:string[];
  

  ngOnInit() {
    this.getAllProveedores();
    this.addForm = this.formBuilder.group({
      _id: [],
      nombre: ['', Validators.required],
      inventario: ['', Validators.required],
      idProveedor: ['', Validators.required]
    });
  }
  getAllProveedores(): void {
    this.proveedorService.getAllProveedores().subscribe(data=>{
      this.proveedores = data;
    });
  };
  

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.ingredienteService.addIngrediente(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-ingrediente']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}