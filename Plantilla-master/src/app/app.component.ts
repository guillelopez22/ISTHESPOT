import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba';

  employees = [
    {name : "Marco" ,apellido: "Polo"},
    {name : "Juan" ,apellido: "Lopez"},
    {name : "Pedro" ,apellido: "Rodriguez"}
  ]

  model:any = {};
  model2:any = {};

  addEmployee(): void{
    this.employees.push(this.model);
    this.model={};
  }

  deleteEmployee(i): void{
    this.employees.splice(i,1);
    
  }
  myValue;
  editEmploy(i): void{
    this.model2.name = this.employees[i].name;
    this.model2.apellido = this.employees[i].apellido;
    this.myValue = i;
  }

  updateEmployee(): void{
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
    console.log(this.model2)
  }
}
