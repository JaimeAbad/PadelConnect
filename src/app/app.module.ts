import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { AutenticacionService } from './service/autenticacion.service';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PartidoComponent } from './pages/partido/partido.component';
import { UsuarioModel } from './models/usuario.model';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    PrincipalComponent,
    PartidoComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularFireAuthModule,
    SweetAlert2Module,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTING,
  ],
  providers: [AutenticacionService, UsuarioModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
