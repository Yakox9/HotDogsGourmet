import { Injectable } from '@angular/core';
import { Sucursal } from '../interface/sucursal';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  private sucursales: Sucursal[]=[
    {id:"1",name:"Barrio Obrero",direccion:"calle 14"},
    {id:"2",name:"Barrio Sucre",direccion:"La Normal"},
    {id:"3",name:"Las Vegas",direccion:"Via Principal"},
    {id:"4",name:"Rubio",direccion:"Colegio Solo"},
    {id:"5",name:"Zona Industrial",direccion:"Calle Principal, Panaderia"}
  ];
  constructor() { }

  getSucursales(): Observable<Sucursal[]>{
    return of(this.sucursales);
  }
}
