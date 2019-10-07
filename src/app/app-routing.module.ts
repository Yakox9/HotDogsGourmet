import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { TiendaComponent } from './tienda/tienda.component';
import { FacturaComponent } from './factura/factura.component'; 
const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'admin',component: AdministradorComponent},
  {path:'tienda',component: TiendaComponent},
  {path:'factura',component: FacturaComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
