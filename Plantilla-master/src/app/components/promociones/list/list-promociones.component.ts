import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PromocionModel } from '../../../Models/PromocionModel';
import { PromocionService } from '../../../services/promocion.service';

@Component({
  selector: 'app-list-promociones',
  templateUrl: './list-promociones.component.html',
  styleUrls: ['./list-promociones.component.css']
})

export class ListPromocionesComponent implements OnInit {

  promociones: PromocionModel[];

  constructor(private promocionService: PromocionService, private router: Router) { }

  ngOnInit() {
    this.getAllPromociones();
  }

  getAllPromociones(): void {
    this.promocionService.getAllPromociones().subscribe(data=>{
      this.promociones = data;
    });
  };

  addPromocion(): void {
    this.router.navigate(['add-promocion']);
  }

  deletePromocion(promocion: PromocionModel){
    
    this.promocionService.deletePromocion(promocion._id).subscribe(data => {
      console.log(data);
      this.getAllPromociones();
    });
  }

  updatePromocion(promocion: PromocionModel){
    localStorage.removeItem("promocionId");
    localStorage.setItem("promocionId", promocion._id);
    this.router.navigate(['edit-promocion']);
  }

}