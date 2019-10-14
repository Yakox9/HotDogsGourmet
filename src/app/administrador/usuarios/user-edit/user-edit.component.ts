import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interface/user';
import {UsersService} from '../../../service/users.service';

@Component({
  selector: 'chd-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  @Output() cancelEmmit = new EventEmitter<Number>();
  private passw: string='';
  private active:number=0;
  constructor(private userProvider: UsersService) { }

  ngOnInit() {
  }



  addUser(){
    if((typeof this.user._id !== "undefined" )&& this.user._id !== ''){
      if(this.passw !== '')
        this.user.pass=this.passw;
        console.log(this.user);
      this.userProvider.userEdit(this.user);
    }
    else{
      this.user.pass=this.passw;
      this.userProvider.userAdd(this.user);
      this.cancelEmmit.emit(5);
    }
  }

  deleteUser(){
    if((typeof this.user._id !== "undefined" )&& this.user._id !== ''){
      this.userProvider.deleteProducto(this.user._id);
      this.cancelEmmit.emit(5);
    }
    else{
      this.cancelEmmit.emit(1);
    }
  }

}
