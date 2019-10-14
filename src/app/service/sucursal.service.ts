import { Injectable } from '@angular/core';
import { SucursalProduct } from '../interface/sucursalProduct';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  readonly URL_API= 'http://localhost:3000/productosucursal';/**Eliana */
  constructor(private http: HttpClient) { }

 

  getSucursal():Observable<SucursalProduct[]>{
    return this.http.get<SucursalProduct[]>(this.URL_API);
  }

  addSucursal(sucursal: SucursalProduct){
    console.log(sucursal);
    if(sucursal._id !== '' && (typeof sucursal._id !== 'undefined')){
      console.log(sucursal._id);
      this.http.put(`${this.URL_API}/${sucursal._id}`,sucursal).subscribe(data=>console.log(data));
    }else{
      this.http.post(this.URL_API,sucursal).subscribe(data=>console.log(data));
    }
  }

  deleteSucursal(id: string){
    this.http.delete(`${this.URL_API}/${id}`).subscribe(data=>console.log(data));
  }
}
