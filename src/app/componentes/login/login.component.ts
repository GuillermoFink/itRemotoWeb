import { Component, OnInit } from '@angular/core';

import { MiHttpService } from '../../servicios/http/mi-http.service';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from '../../servicios/servicio-usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;

  constructor(private mihttp: MiHttpService, private miRoot: Router, private servicioUsuario: ServicioUsuarioService) { }

  ngOnInit() {
  }

  login() {
    let data = { mail: this.usuario, password: this.password }
    this.mihttp.httpPostP('/login', data)
      .then(data => {
        if (data != "error") {
          localStorage.setItem('token', data);
          console.log(data);
          console.log("******************************");
          let payload = data.split('.')[1];
          let pay2 = payload.replace('-', '+').replace('_', '/');
          let datos = JSON.parse(atob(pay2));
          console.log(datos);
          console.log("******************************");
          console.log(datos['data'][0]);
          if (datos['data'][0]['nombre'] != null) {
            this.servicioUsuario.setApellidoUsuario(datos['data'][0]['apellido']);
            this.servicioUsuario.setNombreUsuario(datos['data'][0]['nombre']);
            this.servicioUsuario.setTipoUsuario(datos['data'][0]['tipo']);
            this.servicioUsuario.setMailUsuario(datos['data'][0]['mail']);
            this.servicioUsuario.setIdUsuario(datos['data'][0]['id']);
            let timerInterval
            swal({
              title: 'Bienvenido '+this.servicioUsuario.getNombreUsuario(),
              html: '<strong>Accediendo al sistema</strong>',
              timer: 1500,
              onOpen: () => {
                swal.showLoading()
                timerInterval = setInterval(() => {
                }, 100)
              },
              onClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              if (
                // Read more about handling dismissals
                result.dismiss === swal.DismissReason.timer
              ) {
                console.log('I was closed by the timer')
              }
            })
            this.miRoot.navigate(['/home']);
          } else {
            console.log("error al leer el token");
          }
        } else {
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos',
          })
        }


      })
  }

}
