import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {User} from '../../interface/user';
@Component({
  selector: 'chd-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  private hide: boolean = true;
  private user:User={username:"",id:"",type:0,pass:"",name:""};
  @Output() userEmit = new EventEmitter<User>();
  constructor() { 
    
  }

  ngOnInit() {
  
  }

  submit(){
   this.userEmit.emit(this.user);
  }
  

}
