import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ ListProduct } from '../interface/list-product';
import { Factura } from '../interface/factura';
@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  readonly URL_API= 'http://localhost:3000/factura';/**Eliana */
  private factura: Factura;
  private listProduct: ListProduct[];
  constructor(private http: HttpClient) { }

  
  getFactura(){
    return this.http.get(this.URL_API);
  }

  addFactura(factura:Factura){
    this.http.post(`${this.URL_API}`,factura).subscribe(data=>console.log(data));
  }
}
