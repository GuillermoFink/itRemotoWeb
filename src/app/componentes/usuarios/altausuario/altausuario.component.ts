import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from '../../../servicios/servicio-usuario.service';

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {
  idOwner: number;

  constructor(private ServicioUsuario: ServicioUsuarioService) {
    this.idOwner = this.ServicioUsuario.getIdUsuario();
   }

  ngOnInit() {
  }

}
