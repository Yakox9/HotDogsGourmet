import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/interface/sucursal';
import {SucursalProduct} from '../../interface/sucursalProduct'
import {SucursalService} from '../../service/sucursal.service';
import {ProductsService} from '../../service/products.service';
import { Product } from 'src/app/interface/product';
@Component({
  selector: 'chd-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {
  private sucursales: SucursalProduct[];
  private products: Product[];
  private typeInfo: number=1;
  private product: Product;
  private sucursal: SucursalProduct;
  constructor(private sucursalProviders: SucursalService,private productsProviders: ProductsService) { }

  ngOnInit() {
    this.getSucursal();
    this.getProducts();
  }

  getSucursal(){
    this.sucursalProviders.getSucursal()
        .subscribe(sucursales=>this.sucursales=sucursales);
  }

  getProducts(){
    this.productsProviders.getProductos()
        .subscribe((products: Product[])=>this.products=products);
  }

  activedProduct(product,sucursal){
    this.typeInfo=2;
    this.product=product;
    this.sucursal = sucursal;
  }

  editSucursal(sucursal){
    this.sucursal=sucursal;
    this.typeInfo=1;
    setTimeout(() => {
      this.typeInfo=3;
    }, 200);
    
  }

  clearSucursal(){
    this.sucursal={_id:"",desc:"",name:"",productos:[]};
  }
  addSucursal(){
    this.clearSucursal();
    this.typeInfo=1;
    setTimeout(() => {
      this.typeInfo=3;
    }, 200);
  }

  actionSucursal(sucursal){
    if(sucursal==0){
      this.typeInfo=1;
    }
    else{
        setTimeout(() => {
          this.getSucursal();
          this.typeInfo=1;
        }, 300);
    }
  }
  
}
