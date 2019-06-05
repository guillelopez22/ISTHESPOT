import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Producto_Elaborado_DetailService } from '../../../services/producto_elaborado_detail.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-producto_elaborado_detail',
  templateUrl: './add-producto_elaborado_detail.component.html',
  styleUrls: ['./add-producto_elaborado_detail.component.css']
})
export class AddProducto_Elaborado_DetailComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private producto_elaborado_detailService: Producto_Elaborado_DetailService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      idProducto_Elaborado: ['', Validators.required],
      idBebida: ['', Validators.required],
      idInsumo: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
  }

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