import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})

export class PaginaComponent implements OnInit {

  contador=0;
  valor: number;
  resultM: number;
  resultA: number;


  Laborales(){
    this.resultM = this.valor * 20;
    this.resultA = this.valor * 240;
    
  }

  Todos(){
    this.resultM = this.valor * 30;
    this.resultA = this.valor * 365;
  }

  Fin(){
    this.resultM = this.valor * 10;
    this.resultA = this.valor * 120;
  }
 
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
