import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersResolver } from './resolvers';
import { PaginationResolver } from './resolvers/pagination.resolver';
import { UsersShellComponent } from './containers/users-shell.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      users: UsersResolver,
      paginationInfo: PaginationResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    component: UsersShellComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PaginationResolver,
    UsersResolver,
  ]
})
export class UsersListRoutingModule { }
