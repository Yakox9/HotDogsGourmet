import { Injectable, ɵConsole } from '@angular/core';
import { HOTDOGS,REFRESHMENTS,PRODUCTS } from '../interface/products';
import {Product} from '../interface/product';
import { Observable, of } from 'rxjs';
import { DetailForSale } from '../interface/detail-for-sale';

import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  selectProducto: Product; /**Eliana */
  produts : Product[]; /**Eliana */
  private SR: Product[];
  private CR:Product[];
  readonly URL_API= 'http://localhost:3000/productos';/**Eliana */

  private listDetail: any=[];
  constructor(private http: HttpClient) { }

/**Eliana */
getProductos(){
  return this.http.get(this.URL_API);
}

/*getProducto(producto : Product){
  return this.http.post(this.URL_API +`/${producto.id}`, producto);
}*/
postProducto(producto : Product){
  let prod ;
  this.http.post(this.URL_API, producto).subscribe(data => prod=data);
  return prod;
}

putProducto(producto : Product){
  console.log(producto);
  this.http.put(`${this.URL_API}/${producto._id}`, producto).subscribe(data=> console.log(data));
}

deleteProducto(id: string ){

   this.http.delete(`${this.URL_API}/${id}`).subscribe(data=>console.log(data));
}


  getProducts(band: boolean): Observable<Product[]> {
     if(band){
      return of(HOTDOGS);
     }else{
      return of(REFRESHMENTS);
     }
  }


  getProductsAll(): Observable<Product[]>{
    return of(PRODUCTS);
  }
  setListDetail(item:DetailForSale){
    this.listDetail.push(item);
    
  }
  
  getListDetail():Observable<DetailForSale[]>{

    return of(this.listDetail);
  }

  getTotal():Observable<number>{
    let total=0;
    this.listDetail.forEach(element => {
      total=total+element.total;
    });
    return of(total);
  }

  setDetailFactura(item:any){
    let data=item;
    console.log(data);
  }
}
