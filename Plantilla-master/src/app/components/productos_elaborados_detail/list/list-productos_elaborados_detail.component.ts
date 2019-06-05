import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Producto_Elaborado_DetailModel } from '../../../Models/Producto_Elaborado_DetailModel';
import { Producto_Elaborado_DetailService } from '../../../services/producto_elaborado_detail.service';

@Component({
  selector: 'app-list-producto_elaborado_detail',
  templateUrl: './list-productos_elaborados_detail.component.html',
  styleUrls: ['./list-productos_elaborados_detail.component.css']
})

export class ListProductos_Elaborados_DetailComponent implements OnInit {

  productos_elaborados_detail: Producto_Elaborado_DetailModel[];

  constructor(private producto_elaborado_detailService: Producto_Elaborado_DetailService, private router: Router) { }

  ngOnInit() {
    this.getAllProductos_Elaborados_Detail();
  }

  getAllProductos_Elaborados_Detail(): void {
    this.producto_elaborado_detailService.getAllProductos_Elaborados_Detail().subscribe(data=>{
      this.productos_elaborados_detail = data;
    });
  };

  addProducto_Elaborado_Detail(): void {
    this.router.navigate(['add-producto_elaborado_detail']);
  }

  deleteProducto_Elaborado_Detail(producto_elaborado_detail: Producto_Elaborado_DetailModel){
    
    this.producto_elaborado_detailService.deleteProducto_Elaborado_Detail(producto_elaborado_detail._id).subscribe(data => {
      console.log(data);
      this.getAllProductos_Elaborados_Detail();
    });
  }

  updateProducto_Elaborado_Detail(producto_elaborado_detail: Producto_Elaborado_DetailModel){
    localStorage.removeItem("producto_elaborado_detailId");
    localStorage.setItem("producto_elaborado_detailId", producto_elaborado_detail._id);
    this.router.navigate(['edit-producto_elaborado_detail']);
  }

}