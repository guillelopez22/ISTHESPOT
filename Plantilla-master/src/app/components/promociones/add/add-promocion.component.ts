import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { PromocionService } from '../../../services/promocion.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

import { ProductoModel } from '../../../Models/ProductoModel';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-add-promocion',
  templateUrl: './add-promocion.component.html',
  styleUrls: ['./add-promocion.component.css']
})
export class AddPromocionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private promocionService: PromocionService,private productoService: ProductoService) { }
  productos: ProductoModel[];
  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.getAllProductos();
    this.addForm = this.formBuilder.group({
      _id: [],
      idProducto: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: ['', Validators.required],
      descuento: ['', Validators.required],
      hora_inicio: ['', Validators.required],
      hora_final: ['', Validators.required]
    });
  }
  getAllProductos(): void {
    this.productoService.getAllProductos().subscribe(data=>{
      this.productos = data;
    });
  };
  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.promocionService.addPromocion(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-promocion']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}