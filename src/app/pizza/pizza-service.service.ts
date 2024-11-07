import { Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

var cont:number;

interface pedidos{
  nombre:string,
  direccion:string,
  telefono:string,
  numero:number,
  size:number,
  num_ing:number,
  total:number
  
}

interface totales{
  cliente:string,
  total:number
}
@Injectable({
  providedIn: 'root'
  
})
export class PizzaServiceService {

  
    formPizzas!:FormGroup;
    
    historial:pedidos[]=[];

    finales: totales[]=[];

    constructor( private readonly fb:FormBuilder){
      this.formPizzas=this.pizza()

    }

    compras:pedidos={
      nombre:"",
      direccion:"",
      telefono:"",
      numero:0,
      size:0,
      num_ing:0,
      total:0
     
    }

    final:totales={
      cliente:'',
      total:0
    }

  
    
    pizza():FormGroup{
      return this.fb.group({
        nombre:[''],
        direccion:[''],
        telefono:[''],
        numero:[''],
        size:[''],
        num_ing:[''],
        num_ing2:[''],
        num_ing3:['']
      
      })
    }
    
    tomarPedido(){
      const{nombre,direccion,telefono,numero,size,num_ing,num_ing2,num_ing3}=this.formPizzas.value;
        this.compras.nombre=nombre;
        this.compras.direccion=direccion;
        this.compras.telefono=telefono;
        this.compras.numero=Number(numero);
        this.compras.size=Number(size);
       
        
        var sum=Number(num_ing+num_ing2+num_ing3)*10;
        this.compras.num_ing=sum;
        this.compras.total= (this.compras.size+this.compras.num_ing)*this.compras.numero;
      ;

          this.historial.push({
            nombre,
            direccion,
            telefono,
            numero: Number(numero),
            size: Number(size),
            num_ing: sum,
            total: this.compras.total
          });

      

      console.log(this.historial)
      cont++;
    }

    sumarPedidos() {
    
      const newFinal: totales = {
        cliente: this.compras.nombre,
        total: this.historial.reduce((acc, pedido) => acc + pedido.total, 0),
      };
    
      this.finales.push(newFinal);
      console.log(this.finales);
    }

    borrarPedidos(){
      this.historial=[];
      this.formPizzas.reset();
      cont=0;
    }
}

