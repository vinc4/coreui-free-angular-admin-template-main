import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import {
  ButtonGroupModule,
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent, DropdownModule, FormCheckComponent,
  FormFeedbackComponent, FormModule, GridModule, ListGroupModule, SharedModule,
  TableModule
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DocsComponentsModule} from "../../../components";
import {HTTP_INTERCEPTORS} from "@angular/common/http";




@NgModule({
  declarations: [
    UsersComponent,
    AddUsersComponent,
    EditUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
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
    ListGroupModule
  ],

})
export class UsersModule { }
