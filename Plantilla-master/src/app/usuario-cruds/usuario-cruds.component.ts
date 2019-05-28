import { Component} from '@angular/core';

@Component({
  selector: 'usuario-cruds',
  templateUrl: './usuario-cruds.component.html',
  styleUrls: ['./usuario-cruds.component.css']
})
export class UsuarioCrudsComponent {

  usuario: any ={};

  onSubmit(){
    console.log(this.usuario)
  }

}
