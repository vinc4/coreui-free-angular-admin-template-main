import { NgModule } from '@angular/core';
import {DriverListComponent} from "./driver-list/driver-list.component";
import {RouterModule, Routes} from "@angular/router";
import {AddDriverComponent} from "./add-driver/add-driver.component";

import {EditDriverComponent} from "./edit-driver/edit-driver.component";



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Drivers',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'drivers',
      },
      {
        path: 'drivers',
        component: DriverListComponent,
        data: {
          title: 'Drivers',
        },
      },
      {
        path: 'add-drivers',
        component: AddDriverComponent,
        data: {
          title: 'add driver',
        },
      },
      {
        path: 'edit-drivers',
        component: EditDriverComponent,
        data: {
          title: 'edit driver',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversRoutingModule { }
