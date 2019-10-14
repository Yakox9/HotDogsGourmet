import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import { User } from '../interface/user';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private route: Router, private http: HttpClient) { }

  AuthUser(username: string, pass: string){
    if(username === "barrioobrero" && pass === "perro"){
      let user: User ={_id: "1", username: username, type: false, name: "Barrio Obrero",pass:""};
      localStorage.setItem("user",JSON.stringify(user));
      this.route.navigate(['/tienda']);
    }
    else{
      if(username === "admin" && pass === "caliente"){
        let user: User ={_id: "2", username: username, type: true, name: "Administrador",pass:""};
        localStorage.setItem("user",JSON.stringify(user));
        this.route.navigate(['/admin']);
      }else{
        alert("Usuario y Contraseña, son Incorrectos.");
      }
    }
  }

  verifyLogin(){
    if(localStorage.getItem("user")!==null){
      let user: User = JSON.parse(localStorage.getItem("user"));
      if(user.username === "barrioobrero" && user.type === false){
        this.route.navigate(['/tienda']);
      }else{
        if(user.type === true && user.username === "admin" ){
          this.route.navigate(['/admin']);
        }else{
          localStorage.clear();
          this.route.navigate(['/']);
        }
      }
    }else{
        localStorage.clear();
        this.route.navigate(['/']);
    }
  }

  logoutUser(){
    localStorage.clear();
    this.route.navigate(['/']);
  }
}
