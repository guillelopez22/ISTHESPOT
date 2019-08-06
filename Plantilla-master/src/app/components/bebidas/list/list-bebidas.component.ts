import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BebidaModel } from '../../../Models/BebidaModel';
import { BebidaService } from '../../../services/bebida.service';

@Component({
  selector: 'app-list-bebidas',
  templateUrl: './list-bebidas.component.html',
  styleUrls: ['./list-bebidas.component.css']
})

export class ListBebidasComponent implements OnInit {

  bebidas: BebidaModel[];

  constructor(private bebidaService: BebidaService, private router: Router) { }

  ngOnInit() {
    this.getAllBebidas();
  }

  getAllBebidas(): void {
    this.bebidaService.getAllBebidas().subscribe(data=>{
      this.bebidas = data;
    });
  };

  addBebida(): void {
    this.router.navigate(['add-bebida']);
  }

  deleteBebida(bebida: BebidaModel){
    
    this.bebidaService.deleteBebida(bebida._id).subscribe(data => {
      console.log(data);
      this.getAllBebidas();
    });
  }

  updateBebida(bebida: BebidaModel){
    localStorage.removeItem("bebidaId");
    localStorage.setItem("bebidaId", bebida._id);
    this.router.navigate(['edit-bebida']);
  }

}