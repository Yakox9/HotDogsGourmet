import { Component, OnInit } from '@angular/core';
import {FacturaService} from '../../service/factura.service';
import {ProductsService } from '../../service/products.service';
import {Factura } from '../../interface/factura';
import {Product } from '../../interface/product';
@Component({
  selector: 'chd-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})


export class EstadisticasComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  sucarsal: SucursalSold[]=[
    {name:"Barrio Obrero",mount:2000000,date: new Date(Date.now())},
    {name:"Barrio Sucre",mount:520000,date: new Date(Date.now())},
    {name:"Las Vegas",mount:630000,date: new Date(Date.now())},
    {name:"Zona Industrial",mount:100000,date: new Date(Date.now())},
    {name:"Paramillo",mount:500000,date: new Date(Date.now())}
  ];

  private facturas: Factura[];
  private product: Product[];
  private prueba: any[];
  private monto: number=0;
  constructor(private facturaProvider: FacturaService, private productProvider: ProductsService) { }

  async ngOnInit() {
    await this.loadData();

    setTimeout(async () => {
      console.log(this.facturas);
      console.log(this.product);
     await this.loadLabel();
      this.loadMonto();

    }, 400);

  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels1 = [];
  public barChartType = 'bar';
  public barChartLegend = true;  
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];

  public barChartData1 = [
  ];


  loadData(){
    this.facturaProvider.getFactura().subscribe((data: Factura[])=>{
      this.facturas=data;
    });
    this.productProvider.getProductos().subscribe((data: Product[])=>this.product=data);
  }

  loadLabel(){
    this.product.forEach(element => {
      this.barChartLabels1.push(element.name);
    });
    this.prueba=this.product;
  }

  loadMonto(){
    this.facturas.forEach(element => {
        element.product.forEach(element1 => {
          this.prueba.forEach(item => {
            if(item._id==element1.id_prod){
              item.cantidad=item.cantidad+element1.cantidad;
            }
          });
        });
        this.monto=this.monto+element.total;
    });
  }

  loadData1(){
    this.prueba.forEach(element => {
      let eleme={data: element.cantidad, label: element.name};
      this.barChartData1.push(eleme);
    });
  }
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface SucursalSold{
  name: string;
  mount: number;
  date: Date;
}