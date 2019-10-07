import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DetailForSale } from 'src/app/interface/detail-for-sale';
import { ProductsService }  from '../../service/products.service';
@Component({
  selector: 'chd-detail-bill',
  templateUrl: './detail-bill.component.html',
  styleUrls: ['./detail-bill.component.css']
})
export class DetailBillComponent implements OnInit {
  private listDetail: DetailForSale[];
  private listCopy: DetailForSale[]=[];
  @Output() totalOut = new EventEmitter<number>();
  @Input() total: number;
  constructor( private productsService: ProductsService) { }

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

  addDetailBill(lD){
    let algo=confirm("Procesar Venta.");
    if(algo){
      if(this.listCopy!==null && (typeof this.listCopy !== "undefined")){
        this.listCopy.splice(0,this.listCopy.length);
      }
      lD.forEach(element => {
        this.listCopy.push(element);
      });
      this.productsService.setDetailFactura(this.listCopy);
      setTimeout(() => {
        this.clearDetail(true);
      }, 500);
    }
  }

}
