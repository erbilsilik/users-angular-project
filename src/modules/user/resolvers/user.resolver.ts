import {ApiService} from '../../core/services';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserInterface} from '../../../interfaces';
import {Injectable} from '@angular/core';

@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(
    private apiService: ApiService,
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserInterface> {
    const id = route.paramMap.get('id');
    return this.apiService.fetchUserById(+id);
  }
}
