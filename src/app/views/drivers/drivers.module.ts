import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import {AddDriverComponent} from "./add-driver/add-driver.component";
import {DriverListComponent} from "./driver-list/driver-list.component";
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
import { DriversRoutingModule } from './drivers-routing.module';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DocsComponentsModule} from "@docs-components/docs-components.module";
import {WidgetsModule} from "../widgets/widgets.module";



@NgModule({
  declarations: [
    EditDriverComponent,
    AddDriverComponent,
    DriverListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    DriversRoutingModule,
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
    ModalHeaderComponent,
    WidgetsModule
  ]
})
export class DriversModule { }
