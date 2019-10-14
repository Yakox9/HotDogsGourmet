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
    
    this.productsProvider.getProductos().subscribe((produc:Product [])=>this.products=produc);
  }

  clearProduct(){
    this.product = {_id:'',
    name: "",
    price: 0,
    type: false,
    desc: "",
     }
  }

  addProduct(product?){
    if((typeof product === "undefined")){
      this.clearProduct();
    }else{
      this.product=product;
      
    }
    this.active =1;
  }

  updateView(val){

    console.log(val);
    if(val==0)
    this.active=val;
    else
    if(val==5){
      setTimeout(() => {
        this.getProducts();
        this.active=0;
      }, 1000);
    }
      
  }

}
