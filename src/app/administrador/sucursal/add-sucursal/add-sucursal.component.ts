import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Sucursal } from 'src/app/interface/sucursal';
import { Product } from 'src/app/interface/product';
import { ProductQuanty } from 'src/app/interface/productsQuanty';
import {SucursalProduct} from '../../../interface/sucursalProduct';
import {SucursalService} from '../../../service/sucursal.service';
@Component({
  selector: 'chd-add-sucursal',
  templateUrl: './add-sucursal.component.html',
  styleUrls: ['./add-sucursal.component.css']
})
export class AddSucursalComponent implements OnInit {
  @Input() private products:Product[];
  @Output() sucursalEmit = new EventEmitter<number>();
  private productss: ProductQuanty[]=[];
   
  @Input() private sucursal: any;
  private suc:Sucursal;
  
  constructor(private sucursalProvider: SucursalService) { }
  ngOnInit() {
    this.loadProducts();
    if(this.sucursal._id!==''){
      this.inArray();
    }
  }

  inArray(){
    if(this.sucursal.productos!==[])
      this.productss.forEach(element => {
        console.log(element);
        let item = this.sucursal.productos.find(data=>data._id===element._id);
        console.log(item);
          element.cantidad=item.cantidad;
      });
    else
      this.productss.forEach(element => {
        element.cantidad=0;
      });
  }

  loadProducts(){
    this.products.forEach(element => {
      let prod: ProductQuanty={_id: element._id,name: element.name,cantidad: 0};
      this.productss.push(prod);
    });
  }
  cancelSucursal(){
    if(this.sucursal._id!==''){

      this.sucursalProvider.deleteSucursal(this.sucursal._id);
      this.sucursalEmit.emit(1);
    }else{
      this.sucursalEmit.emit(0);
    }
  }
  
  selectedOptions=[];
  selectedOption;
    onNgModelChange($event){
      this.selectedOption=$event;
      
    }
    addSucursal(){
      let supro: SucursalProduct={_id:this.sucursal._id,name: this.sucursal.name,desc: this.sucursal.desc,productos: this.selectedOptions};
        this.sucursalProvider.addSucursal(supro);
        this.sucursalEmit.emit(1);
    }

    
}
