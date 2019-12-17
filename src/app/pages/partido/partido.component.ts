import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volver() {
    this.router.navigate(["/principal"]);
  }

}
