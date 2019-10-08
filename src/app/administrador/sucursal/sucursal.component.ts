import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/interface/sucursal';
import {SucursalService} from '../../service/sucursal.service';
import {ProductsService} from '../../service/products.service';
import { Product } from 'src/app/interface/product';
@Component({
  selector: 'chd-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {
  private sucursales: Sucursal[];
  private products: Product[];
  constructor(private sucursalProviders: SucursalService,private productsProviders: ProductsService) { }

  ngOnInit() {
    this.getSucursal();
    this.getProducts();
    console.log(this.sucursales);
  }

  getSucursal(){
    this.sucursalProviders.getSucursales()
        .subscribe(sucursales=>this.sucursales=sucursales);
  }

  getProducts(){
    this.productsProviders.getProductsAll()
        .subscribe(products=>this.products=products);
  }
}
