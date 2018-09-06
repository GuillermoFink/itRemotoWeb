import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ServicioUsuarioService } from '../../servicios/servicio-usuario.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nombre: string;
  id: number;
  apellido: string;
  items: MenuItem[];
  constructor(private servicioUsuario: ServicioUsuarioService) {
    this.nombre = this.servicioUsuario.getNombreUsuario();
    this.apellido = this.servicioUsuario.getApellidoUsuario();
    this.id = this.servicioUsuario.getIdUsuario();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'fa fa-home',
        routerLink: ['/home']
      },
      {
        label: 'Usuarios',
        icon: 'fa fa-users',
        items: [
          {
            label: 'Crear nuevo usuario',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/usuarios/altausuario']
          },
          {
            label: 'Ver Usuarios',
            icon: 'fas fa-users-cog',
            routerLink: ['/usuarios/verUsuarios']
          },
          {
            label: 'Auditoria',
            icon: 'fas fa-user-ninja',
            routerLink: ['/usuarios/auditoria']
          },
          {
            label: 'Mi Perfil',
            icon: 'fa fa-cog',
            routerLink: ['/usuarios/perfil']
          },
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];
  }

}
