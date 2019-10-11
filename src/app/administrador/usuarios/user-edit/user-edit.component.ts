import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'chd-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  private active:number=0;
  constructor() { }

  ngOnInit() {
  }

}
