import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

@Input() items: any[] = [];

  constructor(private router : Router) { }

  verPartido() {
    this.router.navigate(["/partido"]);
  }

}
