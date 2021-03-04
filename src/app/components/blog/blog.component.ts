import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  valor3: string;
  
  
  valor1: number;
  valor2: number;
  operacion: string = "ninguna";
  resultado: number;   

  //Datos de un empleado
  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  sitio='http://www.google.com';

  //Método propiedad 'activo'
  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  //Retorna la suma de sus últimos 3 meses
  ultimos3Sueldos() {
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }
  
  
  constructor() { 

  }

  ngOnInit(): void {
  }



}
