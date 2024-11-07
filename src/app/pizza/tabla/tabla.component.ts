import { Component } from '@angular/core';
import { PizzaServiceService  } from '../pizza-service.service';
import { NgModel,NgForm, NgModelGroup, ReactiveFormsModule, Form } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './tabla.component.html',
  
})
export class TablaComponent {
  historialPedidos: any[] = [];
 
  constructor (public pizzaservice:PizzaServiceService){

    this.historialPedidos = this.pizzaservice.historial;
  }
  
 

 
 

    
  
  limpiarDatos() {
    this.pizzaservice.borrarPedidos(); 
    this.historialPedidos = this.pizzaservice.historial;
    
    
  }

}
