import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProveedorModel } from '../../../Models/ProveedorModel';
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'app-list-proveedores',
  templateUrl: './list-proveedores.component.html',
  styleUrls: ['./list-proveedores.component.css']
})

export class ListProveedoresComponent implements OnInit {

  proveedores: ProveedorModel[];

  constructor(private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit() {
    this.getAllProveedores();
  }

  getAllProveedores(): void {
    this.proveedorService.getAllProveedores().subscribe(data=>{
      this.proveedores = data;
    });
  };

  addProveedor(): void {
    this.router.navigate(['add-proveedor']);
  }

  deleteProveedor(proveedor: ProveedorModel){
    
    this.proveedorService.deleteProveedor(proveedor._id).subscribe(data => {
      console.log(data);
      this.getAllProveedores();
    });
  }

  updateProveedor(proveedor: ProveedorModel){
    localStorage.removeItem("proveedorId");
    localStorage.setItem("proveedorId", proveedor._id);
    this.router.navigate(['edit-proveedor']);
  }

}