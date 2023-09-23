import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../../services/UserService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent {
  driver: any;
  driverForm: any;
  userForm: any;
  customStylesValidated: any;

  constructor(private fb: FormBuilder ,private userService: UserService,private router: Router) {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required]],
      middlename: [''],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      contractnumber: ['', [Validators.required]],
      licensenumber: ['', [Validators.required]],
      role: ['user'],
      password: ['', [Validators.required]],
      issueDate: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      iDNumber: ['', [Validators.required]],
      status: ['Active'],

    });
  }

  createDriver() {

  }

  onReset1() {

  }

  onSubmit() {
    this.customStylesValidated = true;
    if(this.userForm.valid)
    {
      this.userService.addDriver(this.userForm.value).subscribe(
        (response) => {
          console.log('User added successfully:', response);
          this.router.navigate(['/drivers']);
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
    }
  }
}
