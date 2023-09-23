import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonGroupModule,
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  DropdownModule,
  FormCheckComponent,
  FormFeedbackComponent,
  FormModule,
  GridModule,
  ListGroupModule,
  ModalBodyComponent, ModalComponent,
  ModalFooterComponent, ModalHeaderComponent,
  SharedModule,
  TableModule,
} from "@coreui/angular";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DocsComponentsModule} from "@docs-components/docs-components.module";
import {EditVehicleComponent} from "./edit-vehicle/edit-vehicle.component";
import {AddVehicleComponent} from "./add-vehicle/add-vehicle.component";
import {VehicleListComponent} from "./vehicle-list/vehicle-list.component";
import {VehicleRoutingModule} from "./vehicle-routing.module";



@NgModule({
  declarations: [
    EditVehicleComponent,
    AddVehicleComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    VehicleRoutingModule,
    CardHeaderComponent,
    CardComponent,
    ColComponent,
    CardBodyComponent,
    TableModule,
    CardBodyComponent,
    CardHeaderComponent,
    CardComponent,
    ColComponent,
    FormsModule,
    DocsComponentsModule,
    FormFeedbackComponent,
    FormCheckComponent,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalComponent,
    ModalHeaderComponent

  ]
})
export class VehicleModule { }

