import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserInterface} from '../../../../interfaces';
import {ApiService} from '../../../core/services';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './user-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserShellComponent implements OnInit {
  private user$: Observable<UserInterface>;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.user$ = this.activatedRoute.data.pipe(map(({ user }) => user));
  }

  back(): void {
    this.router.navigate(['./users']);
  }
}
