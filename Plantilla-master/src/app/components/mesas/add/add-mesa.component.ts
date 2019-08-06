import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MesaService } from '../../../services/mesa.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-mesa',
  templateUrl: './add-mesa.component.html',
  styleUrls: ['./add-mesa.component.css']
})
export class AddMesaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private mesaService: MesaService) { }
  addForm: FormGroup;
  submitted = false;
  
  

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      idOrden: ['',Validators.required],
      nombre: ['', Validators.required],
      numero: ['', Validators.required]
      
    });
  }
  

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.mesaService.addMesa(this.addForm.value)
      .subscribe( data => {
        console.log("aqui"+data);
        this.router.navigate(['list-mesa']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}