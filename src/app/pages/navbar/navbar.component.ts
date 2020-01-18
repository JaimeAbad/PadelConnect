import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private autenticacion: AutenticacionService, private router: Router) { }

  ngOnInit() {
  }

  cerrarSesion(){
    this.autenticacion.salir();
    this.router.navigateByUrl('/login');
  }
}
