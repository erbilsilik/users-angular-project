import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {debounce, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserInterface} from '../../../interfaces';

@Component({
  templateUrl: './users-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersShellComponent implements OnInit {

  private userList$: Observable<UserInterface[]>;
  private paginationInfo$: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.userList$ = this.activatedRoute.data.pipe(
      map(data => data.users)
    );

    this.paginationInfo$ = this.activatedRoute.data.pipe(
      map(data => data.paginationInfo)
    );
  }

  pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;
    this.router.navigate(['./'], { queryParams: { page } });
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
