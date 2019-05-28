import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductoService } from '../../../services/producto.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { ProductoModel } from '../../../Models/ProductoModel';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  bebida: ProductoModel;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private productoService: ProductoService) { }

  ngOnInit() {
    let productoId = localStorage.getItem("productoId");
    if(!productoId){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      idBebida: ['', Validators.required],
      idProducto_Elaborado: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required]
    });

    this.productoService.getProductoById(productoId).subscribe(data=>{
      console.log(data);
      this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
    });
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.productoService.updateProducto(this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-producto']);
      });
    }
  }

}