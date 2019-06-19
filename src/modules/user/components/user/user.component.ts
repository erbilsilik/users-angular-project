import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../../../../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user: UserInterface;
  @Output() back = new EventEmitter();
}
