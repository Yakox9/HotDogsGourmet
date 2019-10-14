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
    this.usersProvider.getUsers().subscribe((users: User[])=>this.users=users);
  }

  cleanUser(){
    this.user={_id:"",name:"",username:"",type:false,pass:""}
    this.active=0;
  }

  selectUser(user){
    this.user=user;
    console.log(user);
    this.active=0;
  }

  cargarInit(data){
    if(data===5){
      setTimeout(() => {
        this.getUsers();
      }, 500);
    }

    this.active=1;
  }
}
