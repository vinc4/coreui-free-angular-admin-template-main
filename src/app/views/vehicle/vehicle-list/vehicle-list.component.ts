import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {UserService} from "../../../services/UserService";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent {
  data: any;
  visible: any;
  selectedVehicle: any;

  constructor(private router: Router,private fb: FormBuilder ,private userService: UserService,) {
  }

  ngOnInit(): void {
    this.getVehicles();
  }

  addDriver() {

  }

  setVehicle(result: any) {
    this.userService.VehicleData(result);
    this.selectedVehicle = result;
  }

  toggle() {
    this.visible = !this.visible;
  }

  handleChange($event: any) {

  }

  deleteUser() {

  }

  getVehicles()
  {
    this.userService.getDriverVehicle().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data)
      },
      (error) => {
        console.error('Error geting user:', error);
      }
    );
  }

  deleteVehicle() {
    this.userService.deleteDriverVehicle( this.selectedVehicle).subscribe(
      (response) => {
        this.getVehicles();
        this.toggle();
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }
}
