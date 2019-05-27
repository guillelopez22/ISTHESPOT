import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductoService } from '../../../services/producto.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private bebidaService: ProductoService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      idBebida: ['', Validators.required],
      idProducto_Elaborado: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion : ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.bebidaService.addProducto(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-producto']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}