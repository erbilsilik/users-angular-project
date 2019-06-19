import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

@Injectable()
export class PaginationResolver implements Resolve<any> {

  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.apiService.fetchPaginationInfo();
  }

}
