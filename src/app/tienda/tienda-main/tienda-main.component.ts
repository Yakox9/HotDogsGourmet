import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../../interface/product';
@Component({
  selector: 'chd-tienda-main',
  templateUrl: './tienda-main.component.html',
  styleUrls: ['./tienda-main.component.css']
})
export class TiendaMainComponent implements OnInit {
  @Input() products: Product[];
  @Output() productEmit = new EventEmitter<Product>();
  private id:number=0;

  constructor() { }

  ngOnInit() {
  }

  selectProduct(product){
    product.ident=this.id;
    this.productEmit.emit(product);
    this.id++;
  }

}
