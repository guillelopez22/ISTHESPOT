import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ProveedorService } from '../../../services/proveedor.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { ProveedorModel } from '../../../Models/ProveedorModel';

@Component({
  selector: 'app-edit-proveedor',
  templateUrl: './edit-proveedor.component.html',
  styleUrls: ['./edit-proveedor.component.css']
})
export class EditProveedorComponent implements OnInit {

  proveedor: ProveedorModel;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private proveedorService: ProveedorService) { }

  ngOnInit() {
    let proveedorId = localStorage.getItem("proveedorId");
    if(!proveedorId){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      nombre: ['', Validators.required],
      pais: ['', Validators.required],
      telefono: ['', Validators.required],
      contacto: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required]
    });

    this.proveedorService.getProveedorById(proveedorId).subscribe(data=>{
      console.log(data);
      this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
    });
  }

  // get the form short name to access the form fields
  get g() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.proveedorService.updateProveedor(this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-proveedor']);
      });
    }
  }

}