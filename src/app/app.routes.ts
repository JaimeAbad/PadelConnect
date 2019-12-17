import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PartidoComponent } from './pages/partido/partido.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'partido', component: PartidoComponent },
  // redirigir a pagina principal al pulsar en el logo en la linea de abajo
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
