import { Component} from '@angular/core';

@Component({
  selector: 'app-ingredientes-cruds',
  templateUrl: './ingredientes-cruds.component.html',
  styleUrls: ['./ingredientes-cruds.component.css']
})
export class IngredientesCrudsComponent  {

  usuario: any ={}

  onSubmit(){
    console.log(this.usuario)
  }

}
