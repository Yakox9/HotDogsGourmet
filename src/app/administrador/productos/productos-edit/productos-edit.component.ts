import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { Sucursal } from 'src/app/interface/sucursal';
import {ProductsService} from '../../../service/products.service';


declare var M:any;

@Component({
  selector: 'chd-productos-edit',
  templateUrl: './productos-edit.component.html',
  styleUrls: ['./productos-edit.component.css']
})
export class ProductosEditComponent implements OnInit {

  @Input() product: Product;  
  @Input() sucursal:Sucursal;
  @Output() cancelEmit = new EventEmitter<number>();
  private cantidad:number=0;
  private sucursalExist: boolean =false;
  constructor(private productProvider: ProductsService) { }

  ngOnInit() {
    if(typeof this.sucursal !== "undefined"){
      this.sucursalExist=true;
    }
  }

  aggProduct(){
      let prod ;

      prod = this.productProvider.postProducto(this.product);
      this.cancelEmit.emit(5);

  }

  editProduct(){
    this.productProvider.putProducto(this.product);
  }

  deleteProduct(){
    this.productProvider.deleteProducto(this.product._id);
    this.cancelEmit.emit(5);
  }

  cancelAdd(){
    this.cancelEmit.emit(0);
  }


  

}
