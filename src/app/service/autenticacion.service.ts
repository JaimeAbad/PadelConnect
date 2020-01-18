import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private url='https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey='AIzaSyAPqOGR8UunOrxu5Fs8FCw-laSArvFiIPY';
  private urlData= 'https://padelconnect-18067.firebaseio.com';
  userToken= '';
  nombre='';
  logFace = false;

  constructor(public afAuth: AngularFireAuth, private http: HttpClient) { }

  nuevoUsuario ( usuario: UsuarioModel ){

    return this.http.post(`${ this.urlData }/usuarios.json`, usuario)
    .pipe(
      map((resp:any) => {
        usuario.id = resp.name;
        return usuario;
      })
    );

  }

  nuevoUsuario1( usuario: UsuarioModel){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }

    return this.http.post(`${ this.url }:signUp?key=${ this.apiKey }`,authData)
    .pipe(
        map((resp:any) => {
          //console.log("nuevoUsuario: "+resp);
          return authData;
        })
      );
  }

  login(usuario: UsuarioModel){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }

    return this.http.post(
      `${ this.url }:signInWithPassword?key=${ this.apiKey }`,
      authData
    ).pipe(
      map( resp=> {
        //console.log("respuesta: "+ resp);
        this.guardarToken( resp['idToken']);
        return resp;
      })
    )
  }

  getUsuarios() {
    return this.http.get(`${ this.urlData }/usuarios.json`)
    .pipe(
      map( this.crearArray ),
      delay(1500)
    );
  }

  private crearArray(usuarioObj: object){
    const usuarios: UsuarioModel[] = [];

    if(usuarioObj == null){
      return[];
    }

    Object.keys(usuarioObj).forEach(key => {
      const usuario: UsuarioModel = usuarioObj[key];
      usuario.id = key;
      usuarios.push(usuario);
    })
    return usuarios;
  }

  getUsuario(id: string){
    return this.http.get(`${this.urlData }/usuarios/${id}.json`);
  }

  guardarToken( idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  // doFacebookLogin(){
  //  return new Promise<any>((resolve:any, reject:any) => {
  //  let provider = new firebase.auth.FacebookAuthProvider();
  //
  //  this.afAuth.auth.signInWithPopup(provider).then((res):void => {
  //    resolve(res)
  //  }, err => {
  //       console.log(err);
  //       reject(err);
  //     });
  //   }).then((res):void => {
  //     this.logFace = true;
  //     this.userToken=res.credential.accessToken;
  //     this.nombre=res.user.displayName;
  //     localStorage.setItem('token', this.userToken);
  //     localStorage.setItem('nombre', this.nombre);
  //   })
  // }

  mostrarNombre(){
    if(localStorage.getItem('nombre')) {
      return this.nombre = localStorage.getItem('nombre');
    } else {
      return this.nombre = '';
    }
  }

  comprobarEstarAutenticado(): boolean {
    this.leerToken();
    if(this.userToken.length>2 || this.logFace){
      return true;
    }else{
      return false;
    }
  }

  leerToken() {
    if(localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '0';
    }
  }

  salir() {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
  }
}
