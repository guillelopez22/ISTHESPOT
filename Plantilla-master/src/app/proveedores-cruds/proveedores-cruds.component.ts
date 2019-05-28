import { Component} from '@angular/core';

@Component({
  selector: 'app-proveedores-cruds',
  templateUrl: './proveedores-cruds.component.html',
  styleUrls: ['./proveedores-cruds.component.css']
})
export class ProveedoresCrudsComponent {

  usuario: any ={}

  onSubmit(){
    console.log(this.usuario)
  }

}
