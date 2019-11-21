import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;
  constructor(private autenticacion: AutenticacionService,
  private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.usuario.email = '';
    // aqui arriba si ponemos un usuario nos sale en la web por defecto
  }
  validarFormulario(form: NgForm ){

    if (form.invalid) {
        return;
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    //Metodo para que no aparezca boton de aceptar
    Swal.showLoading();

    this.autenticacion.nuevoUsuario( this.usuario )
    .subscribe( resp => {
      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/home');

      //controlo si se ha pulsado recordarme
      if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
      }
    }, (error)=> {
      console.log(error);
      console.log(error.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: error.error.error.message
      });
    });
    // console.log("Formulario enviado de: ", this.usuario);
    // console.log("Form: ", form);
  }





}
