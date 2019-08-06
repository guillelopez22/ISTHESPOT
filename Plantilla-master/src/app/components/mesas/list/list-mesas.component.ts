import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MesaModel } from '../../../Models/MesaModel';
import { MesaService } from '../../../services/mesa.service';

@Component({
  selector: 'app-list-mesas',
  templateUrl: './list-mesas.component.html',
  styleUrls: ['./list-mesas.component.css']
})

export class ListMesasComponent implements OnInit {

  mesas: MesaModel[];

  constructor(private mesaService: MesaService, private router: Router) { }

  ngOnInit() {
    this.getAllMesas();
  }

  getAllMesas(): void {
    this.mesaService.getAllMesas().subscribe(data=>{
      this.mesas = data;
    });
  };

  addMesa(): void {
    this.router.navigate(['add-mesa']);
  }

  deleteMesa(mesa: MesaModel){
    
    this.mesaService.deleteMesa(mesa._id).subscribe(data => {
      console.log(data);
      this.getAllMesas();
    });
  }

  updateMesa(mesa: MesaModel){
    localStorage.removeItem("mesaId");
    localStorage.setItem("mesaId", mesa._id);
    this.router.navigate(['edit-mesa']);
  }

}