import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from '../../../servicios/servicio-usuario.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {
  idOwner: number;
  frmControl: FormGroup;

  constructor(private ServicioUsuario: ServicioUsuarioService) {
    this.idOwner = this.ServicioUsuario.getIdUsuario();
   }

  ngOnInit() {
    this.frmControl = new FormGroup(
      {
        nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
        apellido: new FormControl(''),
        mail: new FormControl(''),
        password: new FormControl('',[Validators.required, Validators.minLength(4)]),
        passwordRepeat: new FormControl('',[Validators.required, Validators.minLength(4)]),
        tipo: new FormControl(''),

      }
    )
  }
  onSubmit(){
    console.log("llego al submit");
  }
  validadorDePasswords(g: FormGroup){
    return g.get('password').value === g.get('passwordRepeat').value ? null: {'mismatch': true}
  }

}
