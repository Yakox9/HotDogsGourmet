import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Sucursal } from 'src/app/interface/sucursal';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'chd-add-sucursal',
  templateUrl: './add-sucursal.component.html',
  styleUrls: ['./add-sucursal.component.css']
})
export class AddSucursalComponent implements OnInit {
  @Input() private products:Product[];
  @Output() sucursalEmit = new EventEmitter<Sucursal>();
  private sucursal: Sucursal;
  private suc:Sucursal;
  constructor() { }
  ngOnInit() {
    this.sucursal={id:"",name:"",direccion:""};
  }

  cancelSucursal(){
    this.sucursalEmit.emit(this.suc);
  }

}
