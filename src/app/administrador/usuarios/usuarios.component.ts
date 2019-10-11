import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import {UsersService} from '../../service/users.service'

@Component({
  selector: 'chd-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  private users: User[];
  private user: User;
  private active: number=1;
  constructor(private usersProvider: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.usersProvider.getUsers().subscribe(users=>this.users=users);
  }

  cleanUser(){
    this.user={id:"",name:"",username:"",type:0,pass:""}
    this.active=0;
  }

  selectUser(user){
    user.pass="";
    this.user=user;
    this.active=0;
  }
}
