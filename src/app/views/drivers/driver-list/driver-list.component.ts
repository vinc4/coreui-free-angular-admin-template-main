import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {UserService} from "../../../services/UserService";

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent {
  public data: any;
  public visible = false;
  public selectedDriver: any;

  constructor(private router: Router,private fb: FormBuilder ,private userService: UserService,) {
  }
  addDriver() {
    this.router.navigate(['/drivers/add-drivers']);
  }

  ngOnInit(): void {
    this.getDrivers();
  }

  //getDrivers
  private getDrivers() {
    this.userService.getDrivers().subscribe(
      (response) => {
        console.log('User added successfully:', response);
        this.data = response;
      },
      (error) => {
        console.error('Error geting user:', error);
      }
    );
  }

  setUser(result: any) {
    this.userService.driverUserData(result);
    this.selectedDriver = result;
  }

  toggle() {
    this.visible = !this.visible;
  }

  handleChange(event: any) {
    this.visible = event;
  }

  deleteUser() {
    this.userService.deleteDriver( this.selectedDriver).subscribe(
      (response) => {
        this.getDrivers();
        this.toggle();
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }
}
