import { Injectable } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { MiHttpService } from '../http/mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private miHttp: MiHttpService, private miUsuario: Usuario) { }

  getIdUsuario(){
    return this.miUsuario.id;
  }
  setIdUsuario(data){
    this.miUsuario.id = data;
  }

  getNombreUsuario(){
    return this.miUsuario.nombre;
  }
  setNombreUsuario(data){
    this.miUsuario.nombre = data;
  }

  getApellidoUsuario(){
    return this.miUsuario.apellido ;
  }
  setApellidoUsuario(data){
    this.miUsuario.apellido = data;
  }

  getMailUsuario(){
    return this.miUsuario.mail;
  }
  setMailUsuario(data){
    this.miUsuario.mail = data;
  }

  getPasswordUsuario(){
    return this.miUsuario.password;
  }
  setPasswordUsuario(data){
    this.miUsuario.password = data;
  }

  getTipoUsuario(){
    return this.miUsuario.tipo;
  }
  setTipoUsuario(data){
    this.miUsuario.tipo = data;
  }

  getPaisUsuario(){
    return this.miUsuario.pais;
  }
  setPaisUsuario(data){
    this.miUsuario.pais = data;
  }

  getHabilitadoUsuario(){
    return this.miUsuario.habilitado;
  }
  setHabilitadoUsuario(data){
    this.miUsuario.habilitado = data;
  }

  getFotoUsuario(){
    return this.miUsuario.foto;
  }
  setFotoUsuario(data){
    this.miUsuario.foto = data;
  }

  getFechaRegistroUsuario(){
    return this.miUsuario.fecha_registro;
  }
  setFechaRegistroUsuario(data){
    this.miUsuario.fecha_registro = data;
  }

  getFechaUltimoLoginUsuario(){
    return this.miUsuario.fecha_ultimo_logueo;
  }
  setFechaUltimoLoginUsuario(data){
    this.miUsuario.fecha_ultimo_logueo = data;
  }

  traerTodosLosUsuarios(): Promise<any>{
    return this.miHttp.httpGetP('traerTodosLosUsuarios')
    .then (data =>{
      console.log(data);
      return data;
    })
  }
}
