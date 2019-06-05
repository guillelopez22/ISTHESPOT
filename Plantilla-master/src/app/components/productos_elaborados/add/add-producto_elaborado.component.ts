import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Producto_ElaboradoService } from '../../../services/producto_elaborado.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-producto_elaborado',
  templateUrl: './add-producto_elaborado.component.html',
  styleUrls: ['./add-producto_elaborado.component.css']
})
export class AddProducto_ElaboradoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private producto_elaboradoService: Producto_ElaboradoService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      idProducto_Elaborado_Detail: ['', Validators.required],
      tipo : ['', Validators.required],
      descripcion : ['', Validators.required],
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.producto_elaboradoService.addProducto_Elaborado(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-producto_elaborado']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}