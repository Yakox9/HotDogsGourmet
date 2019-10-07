import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../interface/user';
import { AuthenticationService} from '../service/authentication.service';
@Component({
  selector: 'chd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.verifyLogin();
  }

  verifyUser(user: User){
    this.auth.AuthUser(user.username,user.pass);
  }

  

}
