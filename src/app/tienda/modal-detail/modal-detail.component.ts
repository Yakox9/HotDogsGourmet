import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DetailForSale } from 'src/app/interface/detail-for-sale';
@Component({
  selector: 'chd-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css']
})
export class ModalDetailComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ModalDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DetailForSale) {
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  
  }

  changeTotal(){
    this.data.total=this.data.cantidad*this.data.product.price;
  }

}
