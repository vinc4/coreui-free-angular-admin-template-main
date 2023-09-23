import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'vehicle-list', pathMatch: 'full' },
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'edit-vehicle', component: EditVehicleComponent },
  { path: 'vehicle-list', component: VehicleListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule {}
