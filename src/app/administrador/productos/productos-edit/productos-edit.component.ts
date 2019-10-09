import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { Sucursal } from 'src/app/interface/sucursal';

@Component({
  selector: 'chd-productos-edit',
  templateUrl: './productos-edit.component.html',
  styleUrls: ['./productos-edit.component.css']
})
export class ProductosEditComponent implements OnInit {
  @Input() product: Product; 
  @Input() sucursal:Sucursal;
  private cantidad:number=0;
  constructor() { }

  ngOnInit() {
  }

}
