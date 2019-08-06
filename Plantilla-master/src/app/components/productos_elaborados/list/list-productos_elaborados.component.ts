import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Producto_ElaboradoModel } from '../../../Models/Producto_ElaboradoModel';
import { Producto_ElaboradoService } from '../../../services/producto_elaborado.service';

@Component({
  selector: 'app-list-producto_elaborado',
  templateUrl: './list-productos_elaborados.component.html',
  styleUrls: ['./list-productos_elaborados.component.css']
})

export class ListProductos_ElaboradosComponent implements OnInit {

  productos_elaborados: Producto_ElaboradoModel[];

  constructor(private producto_elaboradoService: Producto_ElaboradoService, private router: Router) { }

  ngOnInit() {
    this.getAllProductos_Elaborados();
  }

  getAllProductos_Elaborados(): void {
    this.producto_elaboradoService.getAllProductos_Elaborados().subscribe(data=>{
      this.productos_elaborados = data;
    });
  };

  addProducto_Elaborado(): void {
    this.router.navigate(['add-producto_elaborado']);
  }

  deleteProducto_Elaborado(producto_elaborado: Producto_ElaboradoModel){
    
    this.producto_elaboradoService.deleteProducto_Elaborado(producto_elaborado._id).subscribe(data => {
      console.log(data);
      this.getAllProductos_Elaborados();
    });
  }

  updateProducto_Elaborado(producto_elaborado: Producto_ElaboradoModel){
    localStorage.removeItem("producto_elaboradoId");
    localStorage.setItem("producto_elaboradoId", producto_elaborado._id);
    this.router.navigate(['edit-producto_elaborado']);
  }

}