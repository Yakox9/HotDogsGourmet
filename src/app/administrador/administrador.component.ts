import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service'
@Component({
  selector: 'chd-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logoutUser();
  }

}
