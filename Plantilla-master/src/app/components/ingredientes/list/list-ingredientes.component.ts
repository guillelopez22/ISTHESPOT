import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IngredienteModel } from '../../../Models/IngredienteModel';
import { IngredienteService } from '../../../services/ingrediente.service';

@Component({
  selector: 'app-list-ingredientes',
  templateUrl: './list-ingredientes.component.html',
  styleUrls: ['./list-ingredientes.component.css']
})

export class ListIngredientesComponent implements OnInit {

  ingredientes: IngredienteModel[];

  constructor(private ingredienteService: IngredienteService, private router: Router) { }

  ngOnInit() {
    this.getAllIngredientes();
  }

  getAllIngredientes(): void {
    this.ingredienteService.getAllIngredientes().subscribe(data=>{
      this.ingredientes = data;
    });
  };

  addIngrediente(): void {
    this.router.navigate(['add-ingrediente']);
  }

  deleteIngrediente(ingrediente: IngredienteModel){
    
    this.ingredienteService.deleteIngrediente(ingrediente._id).subscribe(data => {
      console.log(data);
      this.getAllIngredientes();
    });
  }

  updateIngrediente(ingrediente: IngredienteModel){
    localStorage.removeItem("ingredienteId");
    localStorage.setItem("ingredienteId", ingrediente._id);
    this.router.navigate(['edit-ingrediente']);
  }

}