import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MesaService } from '../../../services/mesa.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { MesaModel } from '../../../Models/MesaModel';

@Component({
  selector: 'app-edit-mesa',
  templateUrl: './edit-mesa.component.html',
  styleUrls: ['./edit-mesa.component.css']
})
export class EditMesaComponent implements OnInit {
    mesa: MesaModel;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private mesaService: MesaService) { }

  ngOnInit() {
    let mesaId = localStorage.getItem("mesaId");
    if(!mesaId){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      idOrden: [],
      nombre: ['', Validators.required],
      numero: ['', Validators.required],
    });

    this.mesaService.getMesaById(mesaId).subscribe(data=>{
      console.log(data);
      this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
    });
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }
  //Para jalar proveedores
  
  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.mesaService.updateMesa(this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-mesa']);
      });
    }
  }

}