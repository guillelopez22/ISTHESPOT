import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductoModel } from '../../../Models/ProductoModel';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})

export class ListProductoComponent implements OnInit {

  productos: ProductoModel[];

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {
    this.getAllProductos();
  }

  getAllProductos(): void {
    this.productoService.getAllProductos().subscribe(data=>{
      this.productos = data;
    });
  };

  addProducto(): void {
    this.router.navigate(['add-producto']);
  }

  deleteProducto(producto: ProductoModel){
    
    this.productoService.deleteProducto(producto._id).subscribe(data => {
      console.log(data);
      this.getAllProductos();
    });
  }

  updateProducto(producto: ProductoModel){
    localStorage.removeItem("productoId");
    localStorage.setItem("productoId", producto._id);
    this.router.navigate(['edit-producto']);
  }

}