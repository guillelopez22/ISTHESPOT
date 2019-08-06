import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { PromocionService } from '../../../services/promocion.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { PromocionModel } from '../../../Models/PromocionModel';


import { ProductoModel } from '../../../Models/ProductoModel';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-edit-promocion',
  templateUrl: './edit-promocion.component.html',
  styleUrls: ['./edit-promocion.component.css']
})
export class EditPromocionComponent implements OnInit {
  promocion: PromocionModel;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private promocionService: PromocionService, private productoService: ProductoService) { }
  productos: ProductoModel[];
  modForm: ProductoModel;

  ngOnInit() {
    let promocionId = localStorage.getItem("promocionId");
    if(!promocionId){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      idProducto: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: ['', Validators.required],
      descuento: ['', Validators.required],
      hora_inicio: ['', Validators.required],
      hora_final: ['', Validators.required]
    });

    this.promocionService.getPromocionById(promocionId).subscribe(data=>{
      console.log(data);
      this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
    });

    this.getAllProductos();
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }
  //Para jalar proveedores
  getAllProductos(): void {
    this.productoService.getAllProductos().subscribe(data=>{
      this.productos = data;
    });
  };
  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.promocionService.updatePromocion(this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-promocion']);
      });
    }
  }

}