import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../services/UserService";
@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent {
  vehicleForm: any;
  customStylesValidated: any;
  userForm: any;
  Drivers: any;

  constructor(private router: Router,private fb: FormBuilder ,private userService: UserService,) {
    this.vehicleForm  = this.fb.group({
      VehicleMake: ['', Validators.required],
      VehicleColor: ['', Validators.required],
      VehicleModel: ['', Validators.required],
      VehicleVin: ['', Validators.required],
      VehicleYear: ['', Validators.required],
      VehicleType: ['', Validators.required],
      LicenceExpiryDate: ['', Validators.required],
      licensenumber: ['', Validators.required],
      InitialMileage: ['', Validators.required],
      InitialtankLiters: ['', Validators.required],
      VehicleEngineType: ['', Validators.required],
      DriverId: ['', Validators.required],
      VehicleStatus: ['Active'],
    });
  }
  ngOnInit(): void {
    this.getDrivers();
  }

  onSubmit() {
    console.log(this.vehicleForm.value)
    this.customStylesValidated = true;
    if(this.vehicleForm.valid)
    {
      this.userService.addDriverVehicle(this.vehicleForm.value).subscribe(
        (response) => {
          console.log('vehicles added successfully:', response);
          this.router.navigate(['/vehicle/vehicle-list']);
        },
        (error) => {
          console.error('Error adding vehicles:', error);
        }
      );
    }
  }

  private getDrivers() {
    this.userService.getDrivers().subscribe(
      (response) => {

        this.Drivers = response;
        console.log('User added successfully:', this.Drivers);
      },
      (error) => {
        console.error('Error geting user:', error);
      }
    );
  }

   selectDriver($event:any)
  {
    const selectedDriver = $event.target.value;
    console.log(selectedDriver);
  }

}
