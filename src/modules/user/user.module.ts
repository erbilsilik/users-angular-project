import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './components/user/user.component';
import {UserShellComponent} from './containers/user-shell/user-shell.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {UserResolver} from './resolvers/user.resolver';

@NgModule({
  declarations: [
    UserComponent,
    UserShellComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    UserResolver
  ]
})
export class UserModule {
}
