import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Producto_ElaboradoService } from '../../../services/producto_elaborado.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { Producto_ElaboradoModel } from '../../../Models/Producto_ElaboradoModel';
import { Producto_Elaborado_DetailModel } from 'src/app/Models/Producto_Elaborado_DetailModel';
import {Producto_Elaborado_DetailService} from '../../../services/producto_elaborado_detail.service'

@Component({
  selector: 'app-edit-producto_elaborado',
  templateUrl: './edit-producto_elaborado.component.html',
  styleUrls: ['./edit-producto_elaborado.component.css']
})
export class EditProducto_ElaboradoComponent implements OnInit { 

  producto_elaborado: Producto_ElaboradoModel;
  editForm: FormGroup;
  submitted = false;
  productos_elaborados_detail: Producto_Elaborado_DetailModel[];

  constructor(private formBuilder: FormBuilder, private router: Router, private producto_elaboradoService: Producto_ElaboradoService, private producto_elaborado_detailService: Producto_Elaborado_DetailService) { }
  modForm: Producto_Elaborado_DetailModel;
  ngOnInit() {
    let producto_elaboradoId = localStorage.getItem("producto_elaboradoId");
    if(!producto_elaboradoId){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }
    

    this.editForm = this.formBuilder.group({
      _id: [],
      idProducto_Elaborado_Detail: ['', Validators.required],
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });

    this.producto_elaboradoService.getProducto_ElaboradoById(producto_elaboradoId).subscribe(data=>{
      console.log(data);
      this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
    });
    this.getAllProducto_Elaborado_Detail();
  }

  getAllProducto_Elaborado_Detail(): void{
    this.producto_elaborado_detailService.getAllProductos_Elaborados_Detail().subscribe(data=>{
      this.productos_elaborados_detail = data;
    })
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.producto_elaboradoService.updateProducto_Elaborado(this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-producto_elaborado']);
      });
    }
  }

}