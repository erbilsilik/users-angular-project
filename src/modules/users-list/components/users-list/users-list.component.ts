import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageEvent} from '@angular/material';
import {UserInterface} from '../../../../interfaces';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input() userList;
  @Input() paginationInfo;
  @Output() pageChanged = new EventEmitter<PageEvent>();
  @Output() userSelected = new EventEmitter<UserInterface>();
  displayedColumns = ['first_name', 'last_name', 'email'];
}
