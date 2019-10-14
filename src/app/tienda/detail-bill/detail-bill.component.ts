import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DetailForSale } from 'src/app/interface/detail-for-sale';
import { ProductsService }  from '../../service/products.service';
import {FacturaService} from '../../service/factura.service';
import {ListProduct} from '../../interface/list-product';
import {Factura} from '../../interface/factura';
@Component({
  selector: 'chd-detail-bill',
  templateUrl: './detail-bill.component.html',
  styleUrls: ['./detail-bill.component.css']
})
export class DetailBillComponent implements OnInit {
  private listDetail: DetailForSale[];
  private listCopy: DetailForSale[]=[];
  private listProduct: ListProduct[]=[];
  private factura: Factura;
  private 
  @Output() totalOut = new EventEmitter<number>();
  @Input() total: number;
  constructor( private productsService: ProductsService,private facturaProvider: FacturaService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(){
    this.productsService.getListDetail().subscribe(list=> this.listDetail=list);
  }

  clearDetail(band?:boolean){
    let algo=false;
    if(!band)
      algo=confirm("Seguro de Elininar el pedido.");
    if(algo || band){
      this.listDetail.splice(0,this.listDetail.length);
      algo=false;
      this.totalOut.emit(0);
    }
  }
  deleteProduct(id){
    this.removeItemFromArr(this.listDetail,id);

  }

  removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );
 
    if ( i !== -1 ) {
        this.total=this.total-item.total;
        this.totalOut.emit(this.total);
        arr.splice( i, 1 );
    }
  }
  clearList(){
    this.listProduct=[];
    this.factura={fecha: new Date(Date.now()),total:0, product: []};
  }
  addDetailBill(lD){
    let algo=confirm("Procesar Venta.");
    if(algo){
      if(this.listCopy!==null && (typeof this.listCopy !== "undefined")){
        this.clearList();
        this.listCopy.splice(0,this.listCopy.length);
      }
      lD.forEach(element => {
        this.listCopy.push(element);
      });
      this.listCopy.forEach(element => {
        this.listProduct.push({id_prod:element.product._id,precio:element.product.price,cantidad:element.cantidad});
      });
      this.factura={fecha: new Date(Date.now()),total:this.total, product: this.listProduct};
      //this.productsService.setDetailFactura(this.listCopy);

      this.facturaProvider.addFactura(this.factura);
      setTimeout(() => {
        this.clearDetail(true);
      }, 500);
    }
   // this.facturaProvider.addFactura();
  }

}
