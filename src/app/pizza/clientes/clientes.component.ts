import { Component } from '@angular/core';
import { PizzaServiceService } from '../pizza-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  
})
export class ClientesComponent {


  total_pedidos:any[]=[];
  constructor (public pizzaservice:PizzaServiceService){}

  ngOnInit(): void {
    
    this.total_pedidos = this.pizzaservice.finales;
  }

  
  
}
