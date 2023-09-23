import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {AddUsersComponent} from "./add-users/add-users.component";
import {EditUsersComponent} from "./edit-users/edit-users.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users',
        },
      },
      {
        path: 'add-users',
        component: AddUsersComponent,
        data: {
          title: 'add user',
        },
      },
      {
        path: 'edit-users',
        component: EditUsersComponent,
        data: {
          title: 'edit user',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UsersRoutingModule { }
