import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  forma: FormGroup;

  constructor() {

      this.forma = new FormGroup({
        'datos': new FormGroup({
          'nombre': new FormControl('',[
            Validators.required,Validators.minLength(3)
          ]),
          'correo': new FormControl('',[
            Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
          ]),
          'direccion': new FormControl('',[]),
          'localidad': new FormControl('',[]),
          'pais': new FormControl('',[]),
          'nivel': new FormControl('',[])
      })
   });
 }

usuario: Object = {
  nombre:null,
  correo:null,
  direccion:null,
  localidad:null,
  pais:null,
  nivel:null
}

public paises = [
    {id:0, nombre:'España'},
    {id:1, nombre:'Portugal'},
    {id:2, nombre:'Francia'}
];

guardar(forma: NgForm){
  console.log(forma);
}





}
