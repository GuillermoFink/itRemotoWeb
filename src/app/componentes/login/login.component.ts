import { Component, OnInit } from '@angular/core';

import {MiHttpService } from '../../servicios/http/mi-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;

  constructor( private mihttp: MiHttpService, private miRoot: Router) { }

  ngOnInit() {
  }
  
  login(){
    let data = {mail: this.usuario, password: this.password}
    this.mihttp.httpPostP('/login', data)
    .then (data => {
      localStorage.setItem('token', data);
      console.log(data);
      let payload = data.split('.')[1];
        let pay2 = payload.replace('-', '+').replace('_', '/');
        let datos = JSON.parse(atob(pay2));
        console.log(datos);
        this.miRoot.navigate(['/home']);
    })
  }

}
