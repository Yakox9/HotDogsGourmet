import { Injectable } from '@angular/core';
import { HOTDOGS,REFRESHMENTS } from '../interface/products';
import {Product} from '../interface/product';
import { Observable, of } from 'rxjs';
import { DetailForSale } from '../interface/detail-for-sale';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private listDetail: any=[];
  constructor() { }

  getProducts(band: boolean): Observable<Product[]> {
     if(band){
      return of(HOTDOGS);
     }else{
      return of(REFRESHMENTS);
     }
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
