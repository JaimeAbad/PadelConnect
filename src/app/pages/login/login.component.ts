import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AutenticacionService } from '../../service/autenticacion.service';
// ES6 MODULES OR TYPESCRIPT
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  recordarme : boolean;

  constructor(private autenticacion: AutenticacionService,
     private router : Router ) {

  }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.usuario.email = '';

    /*Comprobar si pulsamos 'recordarme' para cargar la info del localStorage*/
    if(localStorage.getItem('email') ){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login( form: NgForm) {
    if ( form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false, //prevenir cerrar el alert al clicar
      icon: 'info',
      text: 'Espere por favor ...'
    });
    //METODO PARA QUE NO APAREZCA BOTON DE ACEPTAR/OK
    Swal.showLoading();

    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
    })

    this.autenticacion.login( this.usuario )
    .subscribe( resp => {
      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/home');
      Toast.fire({
        icon: 'success',
        title: 'Logeado'
      })
      //Controlo si se ha pulsado correctamente
      if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
      }


    }, (error)=> {
      console.log(error);
      console.log(error.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Has introducido incorrectamente tu cuenta de PadelConnect o tu contraseña.',
        text: error.error.error.message
      });
    });


  }

}
