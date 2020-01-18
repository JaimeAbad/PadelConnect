import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private autenticacion: AutenticacionService,
              private router: Router) { }

  ngOnInit() {
  }

  configuracion(){
    this.router.navigateByUrl('/principal');
  }
  verPartido() {
    this.router.navigate(["/partido"]);
  }
}
