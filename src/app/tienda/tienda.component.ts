import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import {AuthenticationService} from '../service/authentication.service';
import { ProductsService } from '../service/products.service';
import { Product } from '../interface/product';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {ModalDetailComponent} from "./modal-detail/modal-detail.component";
import { DetailForSale } from '../interface/detail-for-sale';
@Component({
  selector: 'chd-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  user: User;
  productType: boolean= true;
  products$: Product[];
  product:Product;
  productItem: DetailForSale;
  private CR:Product[];
  private SR:Product[];
  listProduct: any=[];
  private total:number=0;
  constructor(private auth: AuthenticationService,private productsProvider: ProductsService, public dialog: MatDialog) {
   }

   ngOnInit() {
    this.auth.verifyLogin();
    this.user = JSON.parse(localStorage.getItem("user"));
    this.updateProducts();
  }

  logout(){
    this.auth.logoutUser();
  }

  getProducts() {
   
   this.productsProvider.getProductos().subscribe((datos: Product[])=>this.SR=datos);
     
 }


 changeProduct(band: boolean){
    if(this.productType !== band){
      this.productType = !this.productType;
      if(this.productType===true){
        this.products$=this.CR;
      }else{
        this.products$=this.SR;
      }
      
    }
 }

 async updateProducts(){
  await this.getProducts();
  setTimeout(() => {
    this.filtrarProduct();
  }, 300);
}

 filtrarProduct(){
  this.CR=this.SR.filter((item:Product)=>{
    if(item.type==true)
      return false;
    else
      return true;
  });
  
  this.SR=this.SR.filter((item:Product)=>{
    if(item.type==true)
      return true;
    else
      return false;
  });
  this.products$=this.CR;
 }

 openDialog(product: Product): void {
  const dialogRef = this.dialog.open(ModalDetailComponent, {
    width: '250px',
    data: {product: product,cantidad:0,total:0}
  });

  dialogRef.afterClosed().subscribe(result => {
    this.productItem=result;
    this.total=this.total+this.productItem.total;
    this.productsProvider.setListDetail(this.productItem);
  });


}

updateTotal(total){
  this.total=total;
}



}
