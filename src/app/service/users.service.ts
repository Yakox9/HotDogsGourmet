import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interface/user';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users:User []=[
    {id: "1",username: "admin", pass: "admin",type: 0, name: "Administrador"},
    {id: "2",username: "barrioobrero", pass: "admin",type: 0, name: "Barrio Obrero"},
    {id: "3",username: "barriosucre", pass: "admin",type: 0, name: "Barrio Sucre"},
    {id: "4",username: "lasvegas", pass: "admin",type: 0, name: "Las Vegas"},
    {id: "5",username: "rubio", pass: "admin",type: 0, name: "Rubio"},
    {id: "6",username: "paramillo", pass: "admin",type: 0, name: "Zona Industrial Paramillo"},
  ]


  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]>{
    return of(this.users);
  }
}
