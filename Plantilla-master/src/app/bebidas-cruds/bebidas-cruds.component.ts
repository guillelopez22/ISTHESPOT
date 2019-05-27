import { Component} from '@angular/core';

@Component({
  selector: 'app-bebidas-cruds',
  templateUrl: './bebidas-cruds.component.html',
  styleUrls: ['./bebidas-cruds.component.css']
})
export class BebidasCrudsComponent  {

  usuario: any = {}
  
  onSubmit(){
    console.log(this.usuario)
  }

}
