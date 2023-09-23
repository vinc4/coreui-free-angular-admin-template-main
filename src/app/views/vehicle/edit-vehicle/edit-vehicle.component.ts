import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../../services/UserService";

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss']
})
export class EditVehicleComponent {
   vehicleForm: any;
   customStylesValidated: boolean | undefined;
   Drivers: any;


  constructor(private router: Router,private fb: FormBuilder ,private userService: UserService,private formBuilder: FormBuilder) {
    this.vehicleForm  = this.fb.group({
      vehicleMake: ['', Validators.required],
      vehicleColor: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      vehicleVin: ['', Validators.required],
      vehicleYear: ['', Validators.required],
      vehicleType: ['', Validators.required],
      licenceExpiryDate: ['', Validators.required],
      licensenumber: ['', Validators.required],
      initialMileage: ['', Validators.required],
      initialtankLiters: ['', Validators.required],
      vehicleEngineType: ['', Validators.required],
      DriverId: ['', Validators.required],
    });



  }

  ngOnInit(): void {

    this.userService.vehicleData$.subscribe((data) => {
      this.vehicleForm = data;

      this.vehicleForm.LicenceExpiryDate = this.convertDate(this.vehicleForm.licenceExpiryDate)

      this.vehicleForm = this.formBuilder.group({
        vehicleMake: [this.vehicleForm.vehicleMake, Validators.required],
        vehicleColor: [this.vehicleForm.vehicleColor, Validators.required],
        vehicleModel: [this.vehicleForm.vehicleModel, Validators.required],
        vehicleVin: [this.vehicleForm.vehicleVin, [Validators.required]],
        vehicleYear: [this.vehicleForm.vehicleYear, [Validators.required]],
        vehicleType: [this.vehicleForm.vehicleType, [Validators.required]],
        licenceExpiryDate: [this.vehicleForm.licenceExpiryDate, [Validators.required]],
        licensenumber: [this.vehicleForm.licensenumber, [Validators.required]],
        initialMileage: [this.vehicleForm.initialMileage, [Validators.required]],
        initialtankLiters: [this.vehicleForm.initialtankLiters, [Validators.required]],
        vehicleEngineType: [this.vehicleForm.vehicleEngineType, [Validators.required]],
        DriverId: [this.vehicleForm.driverId, [Validators.required]],
        VehicleStatus : ["Active"],
        id : [this.vehicleForm.id],
      });

    });

    this.getDrivers();
  }

  convertDate(originalDateString:string){
    const originalDate = new Date(originalDateString);

    const newDate = new Date(originalDate);
    newDate.setDate(originalDate.getDate() - 15);
    const formattedDate = newDate.toISOString().split('T')[0];
    return formattedDate;
  }

  onSubmit() {
    console.log(this.vehicleForm.value)
    this.customStylesValidated = true;
    if(this.vehicleForm.valid)
    {
      this.userService.updateDriverVehicle(this.vehicleForm.value).subscribe(
        (response) => {
          console.log('vehicles added successfully:', response);
          this.router.navigate(['/vehicle']);
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
