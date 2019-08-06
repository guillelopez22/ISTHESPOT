import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Producto_Elaborado_DetailService } from '../../../services/producto_elaborado_detail.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

import { BebidaModel } from '../../../Models/BebidaModel';
import { BebidaService } from '../../../services/bebida.service';
import { IngredienteService } from '../../../services/ingrediente.service';
import { IngredienteModel } from 'src/app/Models/IngredienteModel';
import { Producto_ElaboradoModel } from '../../../Models/Producto_ElaboradoModel';
import { Producto_ElaboradoService } from '../../../services/producto_elaborado.service';


@Component({
  selector: 'app-add-producto_elaborado_detail',
  templateUrl: './add-producto_elaborado_detail.component.html',
  styleUrls: ['./add-producto_elaborado_detail.component.css']
})
export class AddProducto_Elaborado_DetailComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private producto_elaborado_detailService: Producto_Elaborado_DetailService, private bebidaService: BebidaService, private ingredienteService: IngredienteService, private producto_elaboradoService: Producto_ElaboradoService) { }
  bebidas: BebidaModel[];
  ingredientes: IngredienteModel[];
  productos_elaborados: Producto_ElaboradoModel[];
  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.getAllBebidas();
    this.getAllIngredientes();
    this.getAllProductos_Elaborados();
    this.addForm = this.formBuilder.group({
      _id: [],
      idProducto_Elaborado: ['', Validators.required],
      idBebida: ['', Validators.required],
      idInsumo: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
  }
  getAllBebidas(): void {
    this.bebidaService.getAllBebidas().subscribe(data=>{
      this.bebidas = data;
    });
  };
  getAllIngredientes(): void {
    this.ingredienteService.getAllIngredientes().subscribe(data=>{
      this.ingredientes = data;
    });
  };
  getAllProductos_Elaborados(): void {
    this.producto_elaboradoService.getAllProductos_Elaborados().subscribe(data=>{
      this.productos_elaborados = data;
    });
  };

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.producto_elaborado_detailService.addProducto_Elaborado_Detail(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-producto_elaborado_detail']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}