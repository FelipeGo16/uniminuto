import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  valor1: number;
  valor2: number;
  valor3: number;

  arreglo = new Array();

Asignacion(){

  this.arreglo=[this.valor1, this.valor2, this.valor3];
}

Sumar(){
  let sumatoria=0;
  for(let i=0; i<this.arreglo.length;i++)
  sumatoria = sumatoria + this.arreglo[i];

  return sumatoria;
}


  constructor() { }

  ngOnInit(): void {
  }

}
