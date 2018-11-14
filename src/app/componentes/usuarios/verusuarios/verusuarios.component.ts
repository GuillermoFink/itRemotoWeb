import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MiHttpService } from '../../../servicios/http/mi-http.service';
import { UsuarioService } from '../../../servicios/usuario/usuario.service';

@Component({
  selector: 'app-verusuarios',
  templateUrl: './verusuarios.component.html',
  styleUrls: ['./verusuarios.component.css']
})
export class VerusuariosComponent implements OnInit {

  cols: any[];
  paises: SelectItem[];
  tipos: SelectItem[];
  cuerpoTabla: any[];

  constructor(private miHttp: MiHttpService, private miServicioUsuario: UsuarioService) {
    this.miHttp.httpGetP('traerTodosLosUsuarios')
    .then(data => {
      if (data != null) {
        this.cuerpoTabla = data;
        this.cols = [
          { label: 'nombre', header: 'Nombre' },
          { label: 'apellido', header: 'Apellido' },
          { label: 'mail', header: 'Mail' },
          { label: 'tipo', header: 'Tipo' },
          { label: 'pais', header: 'Pais' }
        ];
        console.log(this.cuerpoTabla);
      }
    });
  }

  ngOnInit() {
    
    


    this.paises = [
      { label: 'Pais', value: null },
      { label: 'Argentina', value: 1 },
      { label: 'Mexico', value: 2 },
      { label: 'Chile', value: 3 },
      { label: 'Peru', value: 4 }
    ];

    this.tipos = [
      { label: 'Tipo', value: null },
      { label: 'SysAdmin', value: 1 },
      { label: 'Operador Pais', value: 2 },
      { label: 'Operador CM', value: 3 },
      { label: 'Viewer', value: 4 }
    ];

  }
  onRowSelect(event) {
    console.log(event);
  }

}
