import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from '../../../servicios/servicio-usuario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import swal from 'sweetalert2';
import { MiHttpService } from '../../../servicios/http/mi-http.service';
import { Usuario } from '../../../clases/usuario';

@Component({
    selector: 'app-altausuario',
    templateUrl: './altausuario.component.html',
    styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {
    idOwner: number;
    frmControl: FormGroup;
    paises: SelectItem[];
    tipos: SelectItem[];
    pais: number;
    tipo: number;

    constructor(private ServicioUsuario: ServicioUsuarioService, private miHttp: MiHttpService, private miUsuario: Usuario) {
        this.idOwner = this.ServicioUsuario.getIdUsuario();
        this.paises = [
            { label: 'Elegir pais', value: null },
            { label: 'Argentina', value: 1 },
            { label: 'Mexico', value: 2 },
            { label: 'Chile', value: 3 },
            { label: 'Peru', value: 4 }
        ];
        this.tipos = [
            { label: 'Elegir tipo', value: null },
            { label: 'SysAdmin', value: 1 },
            { label: 'Operador Pais', value: 2 },
            { label: 'Operador CM', value: 3 },
            { label: 'Viewer', value: 4 }
        ];
    }

    ngOnInit() {
        this.frmControl = new FormGroup(
            {
                nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
                apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
                mail: new FormControl('', [Validators.required, Validators.email]),
                password: new FormControl('', [Validators.required, Validators.minLength(4)]),
                passwordRepeat: new FormControl('', [Validators.required, Validators.minLength(4)]),
                tipo: new FormControl('', [Validators.required]),
                pais: new FormControl('', Validators.required)

            }
        )
    }
    onSubmit() {
        if (this.frmControl.get('password').value != this.frmControl.get('passwordRepeat').value) {
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden',
            })
            document.getElementById('password').focus();
        } else {
            console.log(this.frmControl.get('tipo').value);
            this.miUsuario.nombre = this.frmControl.get('nombre').value;
            this.miUsuario.apellido = this.frmControl.get('apellido').value;
            this.miUsuario.mail = this.frmControl.get('mail').value;
            this.miUsuario.password = this.frmControl.get('password').value;
            this.miUsuario.tipo = this.frmControl.get('tipo').value;
            this.miUsuario.pais = this.frmControl.get('pais').value;
            
            this.miHttp.httpPostP('agregarUsuario', this.miUsuario)
                .then(data => {
                    if (data != false) {
                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'Alta OK!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                });
        }
    }
}
