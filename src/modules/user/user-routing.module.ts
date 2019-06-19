import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserShellComponent } from './containers/user-shell/user-shell.component';
import {UserResolver} from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: UserShellComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
