import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interface/user';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly URL_API= 'http://localhost:3000/users';
  private users:User []=[
    {_id: "1",username: "admin", pass: "admin",type: false, name: "Administrador"},
    {_id: "2",username: "barrioobrero", pass: "admin",type: false, name: "Barrio Obrero"},
    {_id: "3",username: "barriosucre", pass: "admin",type: false, name: "Barrio Sucre"},
    {_id: "4",username: "lasvegas", pass: "admin",type: false, name: "Las Vegas"},
    {_id: "5",username: "rubio", pass: "admin",type: false, name: "Rubio"},
    {_id: "6",username: "paramillo", pass: "admin",type: false, name: "Zona Industrial Paramillo"},
  ]


  constructor(private http: HttpClient) { }


  getUsers(){
    return this.http.get(this.URL_API);
  }

  userAdd(user: User){
    console.log(user);
     this.http.post(this.URL_API, user).subscribe(data=>console.log(data));
  }



  userEdit(user: User){
    this.http.put(`${this.URL_API}/${user._id}`, user).subscribe(data=>console.log(data));
  }


  deleteProducto(id: string ){
    console.log(id);
    this.http.delete(`${this.URL_API}/${id}`).subscribe(data=>console.log(data));
  }

}
