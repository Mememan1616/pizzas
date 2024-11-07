import { Component } from '@angular/core';
import { FormGroup, NgModel, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ClientesComponent } from './clientes/clientes.component';
import { TablaComponent } from './tabla/tabla.component';
import { PizzaServiceService } from './pizza-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [FormsModule,ClientesComponent,TablaComponent,ReactiveFormsModule],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export default class PizzaComponent {
    
  constructor (public pizzaservice:PizzaServiceService){}

  

      
}
