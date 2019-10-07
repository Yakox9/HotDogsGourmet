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