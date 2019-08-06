import { Component} from '@angular/core';

@Component({
  selector: 'app-comidas-cruds',
  templateUrl: './comidas-cruds.component.html',
  styleUrls: ['./comidas-cruds.component.css']
})
export class ComidasCrudsComponent  {

  usuario:any = {}
  ingredientes:any ={}
  
  onSubmit(){
    console.log(this.usuario)
  }

}
