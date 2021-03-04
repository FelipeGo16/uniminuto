import { Component, OnInit } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user: any;
  texto = 'hola';


  constructor() { 

    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: '',
      valor1: ' ',
      valor2: ' ',
      valor3: '',
      res: ' '
     };
  }

  onSubmit(){
    alert("OK");
  }

  promedio(){
    this.user.res = (this.user.valor1 + this.user.valor2 + this.user.valor3)/3;
    return this.user.res;
  }

  

  ngOnInit(): void {
  }

}
