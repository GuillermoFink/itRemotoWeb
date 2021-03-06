import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//ROUTER OUTLET
import { RouterModule, Routes, Route } from '@angular/router';

//MODULO PRIMENG
import { PrimengModule } from './modulos/primeng/primeng.module';

//CLASES
import { Usuario } from './clases/usuario';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AltausuarioComponent } from './componentes/usuarios/altausuario/altausuario.component';
import { VerusuariosComponent } from './componentes/usuarios/verusuarios/verusuarios.component';
import { AuditoriausuariosComponent } from './componentes/usuarios/auditoriausuarios/auditoriausuarios.component';
import { PerfilComponent } from './componentes/usuarios/perfil/perfil.component';


const config: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'usuarios',
    children: [
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'verUsuarios',
        component: VerusuariosComponent
      },
      {
        path: 'auditoria',
        component: AuditoriausuariosComponent
      },
      {
        path: 'altausuario',
        component: AltausuarioComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    AltausuarioComponent,
    VerusuariosComponent,
    AuditoriausuariosComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(config)
  ],
  providers: [Usuario],
  bootstrap: [AppComponent]
})
export class AppModule { }
