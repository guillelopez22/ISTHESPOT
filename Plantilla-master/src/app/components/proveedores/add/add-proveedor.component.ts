import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ProveedorService } from '../../../services/proveedor.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private proveedorService: ProveedorService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      nombre: ['', Validators.required],
      pais: ['', Validators.required],
      telefono: ['', Validators.required],
      contacto: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.proveedorService.addProveedor(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-proveedor']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}