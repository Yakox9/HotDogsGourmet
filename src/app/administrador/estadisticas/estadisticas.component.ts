import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

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