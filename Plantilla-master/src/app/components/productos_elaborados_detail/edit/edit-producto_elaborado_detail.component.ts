import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Producto_Elaborado_DetailService } from '../../../services/producto_elaborado_detail.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { Producto_Elaborado_DetailModel } from '../../../Models/Producto_Elaborado_DetailModel';

@Component({
  selector: 'app-edit-producto_elaborado_detail',
  templateUrl: './edit-producto_elaborado_detail.component.html',
  styleUrls: ['./edit-producto_elaborado_detail.component.css']
})
export class EditProducto_Elaborado_DetailComponent implements OnInit {

  producto_elaborado_detail: Producto_Elaborado_DetailModel;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private producto_elaborado_detailService: Producto_Elaborado_DetailService) { }

  ngOnInit() {
    let producto_elaborado_detailId = localStorage.getItem("producto_elaborado_detailId");
    if(!producto_elaborado_detailId){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      idProducto_Elaborado: ['', Validators.required],
      idBebida: ['', Validators.required],
      idInsumo: ['', Validators.required],
      cantidad: ['', Validators.required],
    });

    this.producto_elaborado_detailService.getProducto_Elaborado_DetailById(producto_elaborado_detailId).subscribe(data=>{
      console.log(data);
      this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
    });
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.producto_elaborado_detailService.updateProducto_Elaborado_Detail(this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-producto_elaborado_detail']);
      });
    }
  }

}