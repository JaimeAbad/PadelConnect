import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PartidoComponent } from './pages/partido/partido.component';
import { AutenticacionService } from './service/autenticacion.service';
import { AuthGuard } from './guards/auth.guard';
import { DataComponent } from './pages/data/data.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent/*, canActivate: [ AuthGuard ] */},
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent },
  { path: 'data', component: DataComponent },
  { path: 'principal', component: PrincipalComponent/*, canActivate: [ AuthGuard ] */},
  { path: 'partido', component: PartidoComponent/*, canActivate: [ AuthGuard ] */},
  // redirigir a pagina principal al pulsar en el logo en la linea de abajo
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
