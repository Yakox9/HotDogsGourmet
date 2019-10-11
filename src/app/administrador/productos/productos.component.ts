import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductsService} from '../../service/products.service';
@Component({
  selector: 'chd-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  private products: Product[];
  private product: Product;
  private active: number;
  constructor(private productsProvider: ProductsService) { }

  ngOnInit() {
    this.getProducts();
    this.active=0;
  }

  getProducts(){
    this.productsProvider.getProductsAll().subscribe(produc=>this.products=produc);
  }

  clearProduct(){
    this.product = {id:0,
    name: "",
    price: 0,
    type: 0,
    description: "",
    status: false }
  }

  addProduct(){
    this.clearProduct();
    this.active =1;
  }

  productEdit(product){
    this.product=product;
    this.active =1;
  }
}
