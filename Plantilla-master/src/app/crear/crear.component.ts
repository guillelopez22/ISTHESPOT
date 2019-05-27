import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent{
  
  usuario: any ={};

  onSubmit(){
    console.log(this.usuario)
  }

}
