import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service'
import { User } from '../interface/user';
@Component({
  selector: 'chd-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  private user: User;
  private active: number=0;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.verifyLogin();
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  logout(){
    this.auth.logoutUser();
  }

  changeActive(id){
    this.active=id;
  }

}
